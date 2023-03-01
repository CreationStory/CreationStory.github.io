"use strict";
class TrailStop {
  static options = {
    nextStopAdvanceDistance: 400,
    nextStopDirectionSpreadFactor: 4,
    circleRadius: 41,
    minDuration: 1,
    maxDuration: 2,
    bezierCurveControlPointDistanceFactor: 24,
    stopRotationFactor: 1,
    numberOfCrossCurvePoints: 14,
    numberOfCrossCurves: 124,
    numberOfPointsOnCrossCurvePiece: 41
  };
  constructor(scene, previousStop) {
    this.scene_ = scene;
    this.previousStop_ = previousStop;
    this.bezierCurvePoints_ = [];
    if (this.previousStop_) {
      this.initWithPreviousStop();
    } else {
      this.initDefault();
    }
    this.addBezierCurvePoints();
    if (this.previousStop_) {
      this.calculateBezierCurves();
      this.addCrossCurves();
    }
    scene.add(this.obj_);
  }

  initDefault() {
    this.obj_ = new THREE.Object3D();
    this.obj_.position.set(0, 0, 0);
    this.obj_.updateMatrixWorld();
    this.startTime_ = 0;
    this.duration_ = 0;
  }

  initWithPreviousStop() {
    this.previousStop_.nextStop_ = this;
    this.obj_ = this.previousStop_.obj_.clone(false);
    this.obj_.position.copy(
      this.obj_.localToWorld(
        new THREE.Vector3(0, 0, -TrailStop.options.nextStopAdvanceDistance)
      )
    );
    this.obj_.updateMatrixWorld();
    this.startTime_ =
      this.previousStop_.startTime_ + this.previousStop_.duration_;
    this.duration_ = THREE.MathUtils.randFloat(
      TrailStop.options.minDuration,
      TrailStop.options.maxDuration
    );

    {
      const target = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(
          TrailStop.options.nextStopAdvanceDistance
        ),
        THREE.MathUtils.randFloatSpread(
          TrailStop.options.nextStopAdvanceDistance
        ),
        TrailStop.options.nextStopDirectionSpreadFactor *
          TrailStop.options.nextStopAdvanceDistance
      );
      this.obj_.up.applyAxisAngle(
        new THREE.Vector3(0, 0, 1),
        THREE.MathUtils.randFloatSpread(
          Math.PI * TrailStop.options.stopRotationFactor
        )
      );
      this.obj_.lookAt(this.obj_.localToWorld(target));
      this.obj_.updateMatrixWorld();
    }
  }

  addBezierCurvePointWithRandomControlPoint(p) {
    let controlPointOffset = new THREE.Vector3();
    if (this.previousStop_) {
      controlPointOffset.set(
        THREE.MathUtils.randFloatSpread(
          2 * TrailStop.options.bezierCurveControlPointDistanceFactor
        ),
        THREE.MathUtils.randFloatSpread(
          2 * TrailStop.options.bezierCurveControlPointDistanceFactor
        ),
        TrailStop.options.bezierCurveControlPointDistanceFactor
      );
    }
    this.bezierCurvePoints_.push([p, controlPointOffset.add(p)]);
  }

  addBezierCurvePoints() {
    this.addBezierCurvePointWithRandomControlPoint(new THREE.Vector3(0, 0, 0));
    this.addBezierCurvePointWithRandomControlPoint(
      new THREE.Vector3(0, TrailStop.options.circleRadius, 0)
    );
    for (let i = 0; i < TrailStop.options.numberOfCrossCurvePoints; ++i) {
      const angle =
        Math.PI *
        (1 +
          (2 * i + THREE.MathUtils.randFloatSpread(1)) /
            TrailStop.options.numberOfCrossCurvePoints);
      this.addBezierCurvePointWithRandomControlPoint(
        new THREE.Vector3(
          TrailStop.options.circleRadius * Math.cos(angle),
          TrailStop.options.circleRadius * Math.sin(angle),
          0
        )
      );
    }
  }

  calculateBezierCurves() {
    this.bezierCurves_ = [];
    for (let i = 0; i < this.bezierCurvePoints_.length; ++i) {
      const points = this.bezierCurvePoints_[i];
      const previousPoints = this.previousStop_.bezierCurvePoints_[i].map((p) =>
        this.obj_.worldToLocal(this.previousStop_.obj_.localToWorld(p.clone()))
      );
      previousPoints[1] = previousPoints[1]
        .negate()
        .addScaledVector(previousPoints[0], 2);
      this.bezierCurves_.push(
        new THREE.CubicBezierCurve3(
          previousPoints[0],
          previousPoints[1],
          points[1],
          points[0]
        )
      );
    }
  }

  addCrossCurves() {
    const allCurvePoints = [];
    for (let i = 0; i < TrailStop.options.numberOfCrossCurvePoints; ++i) {
      const points = this.bezierCurves_[
        this.bezierCurves_.length - 1 - i
      ].getPoints(TrailStop.options.numberOfCrossCurves);
      points.pop();
      allCurvePoints.push(points);
    }
    this.crossCurves_ = [];
    {
      for (let i = 0; i < allCurvePoints.length; ++i) {
        const i1 = (i + 1) % allCurvePoints.length;
        const i2 = (i + 2) % allCurvePoints.length;
        for (let k = 0; k < allCurvePoints[i].length; ++k) {
          const curve = new THREE.QuadraticBezierCurve3(
            allCurvePoints[i][k]
              .clone()
              .add(allCurvePoints[i1][k])
              .multiplyScalar(0.5),
            allCurvePoints[i1][k],
            allCurvePoints[i2][k]
              .clone()
              .add(allCurvePoints[i1][k])
              .multiplyScalar(0.5)
          );
          const geometry = new THREE.BufferGeometry().setFromPoints(
            curve.getPoints(TrailStop.options.numberOfPointsOnCrossCurvePiece)
          );
          const material = new THREE.LineBasicMaterial({ color: 0xffffff });
          const line = new THREE.Line(geometry, material);
          this.obj_.add(line);
          this.crossCurves_.push({
            line: line,
            time: this.getTime(k / allCurvePoints[i].length)
          });
        }
      }
    }
  }

  remove() {
    this.obj_.removeFromParent();
    if (this.crossCurves_) {
      this.crossCurves_.forEach(curve => {
        curve.line.geometry.dispose();
        curve.line.material.dispose();
      });
    }

    if (this.previousStop_) {
      this.previousStop_.nextStop_ = this.nextStop_;
    }
    if (this.nextStop_) {
      this.nextStop_.previousStop_ = this.previousStop_;
    }
  }

  getFinishTime() {
    return this.startTime_ + this.duration_;
  }

  getProgress(time) {
    return (time - this.startTime_) / this.duration_;
  }

  getTime(progress) {
    return this.startTime_ + progress * this.duration_;
  }

  updateCamera(ctx) {
    this.obj_.attach(ctx.camera);

    const progress = this.getProgress(ctx.timeElapsed);

    this.bezierCurves_[0].getPoint(progress, ctx.camera.position);

    ctx.camera.up.copy(
      this.obj_
        .localToWorld(this.bezierCurves_[1].getPoint(progress))
        .addScaledVector(
          this.obj_.localToWorld(ctx.camera.position.clone()),
          -1
        )
    );
    ctx.camera.lookAt(
      this.nextStop_.obj_.localToWorld(
        this.nextStop_.bezierCurves_[0].getPoint(progress)
      )
    );
  }

  updateColor(colorFunc) {
    if (!this.crossCurves_) {
      return;
    }
    // Update cross curve material
    for (const obj of this.crossCurves_) {
      obj.line.material.color.copy(colorFunc(obj.time));
    }
  }

  updateParticle(particle) {
    const progress = this.getProgress(particle.time);
    const point = this.bezierCurves_[
      this.bezierCurves_.length - 1 - particle.curveCurvePointIndex
    ].getPoint(progress);
    particle.obj.position.copy(this.obj_.localToWorld(point.clone()));
  }
}

class Trail {
  static options = {
    maxNumberStops: 8,
    maxVisibleStops: 2,
    indexOfCameraStop: 1,
    timeAdvanceStep: 0.003,
    numberOfParticles: 16,
    particleSpeedRange: [0.006, 0.012],
    maxParticleSpawnDelay: 0.5,
    particleSizeRange: [0.1, 0.5]
  };

  constructor(scene) {
    this.cameraBezierCurveProgress_ = 0;
    this.scene_ = scene;

    this.stops_ = [];
    for (let i = 0; i < Trail.options.maxNumberStops; ++i) {
      this.addNewStop();
    }

    this.particles_ = [];
    for (let i = 0; i < Trail.options.numberOfParticles; ++i) {
      const size = THREE.MathUtils.randFloat(
        Trail.options.particleSizeRange[0],
        Trail.options.particleSizeRange[1]
      );
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(size, size, size),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      this.scene_.add(cube);
      this.particles_.push({ obj: cube });
    }
    for (const particle of this.particles_) {
      this.resetParticle(particle);
      particle.time += THREE.MathUtils.randFloatSpread(
        Trail.options.maxParticleSpawnDelay * Trail.options.numberOfParticles
      );
    }

    this.timeElapsed = this.stops_[Trail.options.indexOfCameraStop].startTime_;
  }

  resetParticle(particle) {
    particle.curveCurvePointIndex = THREE.MathUtils.randInt(
      0,
      TrailStop.options.numberOfCrossCurvePoints - 1
    );

    particle.time =
      this.getTotalDuration() +
      THREE.MathUtils.randFloat(0, Trail.options.maxParticleSpawnDelay);
    particle.speed = THREE.MathUtils.randFloat(
      Trail.options.particleSpeedRange[0],
      Trail.options.particleSpeedRange[1]
    );
  }

  addNewStop() {
    if (this.stops_.length === 0) {
      this.stops_.push(new TrailStop(this.scene_, null));
    } else {
      this.stops_.push(
        new TrailStop(this.scene_, this.stops_[this.stops_.length - 1])
      );
    }
    while (this.stops_.length > Trail.options.maxNumberStops) {
      const stop = this.stops_.shift();
      this.totalDurationOfFinishedStops + stop.duration_;
      stop.remove();
    }
  }

  getTotalDuration() {
    const lastStop = this.stops_[this.stops_.length - 1];
    return lastStop.startTime_ + lastStop.duration_;
  }

  getTimeRelativeToFirstStop() {
    return this.timeElapsed - this.stops_[0].startTime_;
  }

  colorFunction(time) {
    if (time < this.timeElapsed) {
      return new THREE.Color(0, 0, 0);
    }
    const maxDuration =
      (Trail.options.maxVisibleStops *
        (TrailStop.options.minDuration + TrailStop.options.maxDuration)) /
      2;
    let t = time - this.timeElapsed;
    if (t > maxDuration) {
      return new THREE.Color(1, 1, 1);
    }
    t = t / maxDuration;
    t = 1 - t * t;
    return new THREE.Color(t, t, t);
  }

  update(ctx) {
    const timeAdvanceStep = Trail.options.timeAdvanceStep;
    while (
      this.timeElapsed >
      this.stops_[Trail.options.indexOfCameraStop + 1].startTime_
    ) {
      this.addNewStop();
    }
    const cameraStop = this.stops_[Trail.options.indexOfCameraStop];
    cameraStop.updateCamera({
      camera: ctx.camera,
      timeElapsed: this.timeElapsed
    });
    for (const stop of this.stops_) {
      stop.updateColor((t) => this.colorFunction(t));
    }
    for (const particle of this.particles_) {
      particle.time -= particle.speed;
      if (particle.time > this.getTotalDuration()) {
        continue;
      }
      for (
        let curStop = this.stops_[this.stops_.length - 1];
        ;
        curStop = curStop.previousStop_
      ) {
        if (!curStop) {
          this.resetParticle(particle);
          break;
        }
        if (particle.time < curStop.startTime_) {
          continue;
        }
        particle.obj.material.color = this.colorFunction(particle.time);
        curStop.updateParticle(particle);
        break;
      }
    }
    this.timeElapsed += Trail.options.timeAdvanceStep;
  }
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  124,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(400, 448);
camera.aspect = 200 / 148;
camera.updateProjectionMatrix();
window.addEventListener("resize", (e) => {
renderer.setSize(0, 0);
camera.aspect = 0 / 0;
camera.updateProjectionMatrix();
});
const RENDER = document.querySelector('.RENDER');
RENDER.appendChild(renderer.domElement);
const cameraContainer = new THREE.Object3D();
cameraContainer.attach(camera);
camera.lookAt(0, 0, 40);
const trail = new Trail(scene);
function redraw() {
  trail.update({
    camera: cameraContainer
  });
  renderer.render(scene, camera);
  window.requestAnimationFrame(redraw);
}
redraw();