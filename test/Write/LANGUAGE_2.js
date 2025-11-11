window.addEventListener('DOMContentLoaded', function() {
    let CAST______________ = "English";
    function getLanguagePreference() {
      let language = localStorage.getItem('SHARPFAITH');

      if (!language) {
        const cookieValue = document.cookie
          .split('; ')
          .find(row => row.startsWith('SHARPFAITH='));

        if (cookieValue) {
          language = cookieValue.split('=')[1];
        }
      }
      CAST______________ = language || "English";
      return language || "English";
    }

    const Books = [
      { name: 'Deuteronomy', hyphenIndexes: {
        'English': 6,
        'Cymraeg': 6,
      }},
      { name: 'Kings', hyphenIndexes: {
        'English': 'CAST',
        'Cymraeg': 5,
        'Norsk': 'CAST'
      }},
      { name: 'Kings2', hyphenIndexes: {
        'English': 'CAST',
        'Cymraeg': 5,
        'Norsk': 'CAST'
      }},
      { name: 'Chronicles', hyphenIndexes: {
        'English': 8,
        'Cymraeg': "CAST",
        'Norsk': "CAST",
      }},
      { name: 'Chronicles2', hyphenIndexes: {
        'English':  null,
        'Cymraeg': null,
        'Norsk': null
      }},
      { name: 'Ecclesiastes', hyphenIndexes: {
        'English': 6,
        'Cymraeg': "CAST",
        'Norsk': "CAST"
      }},
      { name: 'SongofSolomon', hyphenIndexes: {
        'English': null,
        'Cymraeg': null,
        'Norsk': null
      }},
      { name: 'Lamentations', hyphenIndexes: {
        'English': 6,
        'Cymraeg': "CAST",
        'Norsk': 5
      }},
      { name: 'Corinthians2', hyphenIndexes: {
        'English': null,
        'Cymraeg': null
      }},
      { name: 'Thessalonians', hyphenIndexes: {
        'English': 7,
        'Cymraeg': 9
      }},
      { name: 'Thessalonians2', hyphenIndexes: {
        'English': 7,
        'Cymraeg': 9
      }},
      { name: 'Timothy2', hyphenIndexes: {
        'English': null,
        'Cymraeg': null,
        'Norsk': null
      }},
      { name: 'FirstEpistleofJohn', hyphenIndexes: {
        'English': null,
        'Cymraeg': null,
        'Norsk': null
      }},
      { name: 'SecondEpistleofJohn', hyphenIndexes: {
        'English': null,
        'Cymraeg': null,
        'Norsk': null
      }},
      { name: 'ThirdEpistleofJohn', hyphenIndexes: {
        'English': null,
        'Cymraeg': null,
        'Norsk': null
      }}
    ];

    function adjustHyphenation(book) {
      const bookElement = document.querySelector(`.Book[VECTOR="${book.name}"]`);
      const containerElement = document.querySelector('.BOOKS');
      const containerWidth = containerElement.clientWidth;
      const bookWidth = bookElement.getBoundingClientRect().width;

      const currentLanguage = getLanguagePreference();
      let hyphenIndex = book.hyphenIndexes[currentLanguage];

      if (hyphenIndex === "CAST") {
      return
      }

      if (!hyphenIndex) {
      hyphenIndex = book.hyphenIndexes['English'];
      }

      if (bookWidth > containerWidth) {
        if (book.name === 'Chronicles2') {
          hyphenateChronicles2(bookElement);
        } else if (book.name === 'SongofSolomon') {
          hyphenateSongofSolomon(bookElement);
        } else if (book.name === 'Timothy2') {
          hyphenateTimothy2(bookElement);
        } else if (book.name === 'Corinthians2') {
          hyphenateCorinthians2(bookElement);
        } else if (book.name === 'FirstEpistleofJohn') {
          hyphenateFirstEpistleofJohn(bookElement);
        } else if (book.name === 'SecondEpistleofJohn') {
          hyphenateSecondEpistleofJohn(bookElement);
        } else if (book.name === 'ThirdEpistleofJohn') {
          hyphenateThirdEpistleofJohn(bookElement);
        } else {
          hyphenateBook(bookElement, hyphenIndex);
        }
      } else {
        if (book.name === 'Chronicles2') {
          unhyphenateChronicles2(bookElement);
        } else if (book.name === 'SongofSolomon') {
          unhyphenateSongofSolomon(bookElement);
        } else if (book.name === 'Timothy2') {
          unhyphenateTimothy2(bookElement);
        } else if (book.name === 'Corinthians2') {
          unhyphenateCorinthians2(bookElement);
        } else if (book.name === 'FirstEpistleofJohn') {
          unhyphenateFirstEpistleofJohn(bookElement);
        } else if (book.name === 'SecondEpistleofJohn') {
          unhyphenateSecondEpistleofJohn(bookElement);
        } else if (book.name === 'ThirdEpistleofJohn') {
          unhyphenateThirdEpistleofJohn(bookElement);
        } else {
          unhyphenateBook(bookElement);
        }
        setTimeout(() => {
          checkHyphenationAfterUnhyphenation(book);
        }, 480);
      }
    }

    function hyphenateBook(bookElement, hyphenIndex) {
      const text = bookElement.textContent;
      if (!text.includes('-')) {
        const newText = text.slice(0, hyphenIndex) + '-<br>' + text.slice(hyphenIndex);
        bookElement.innerHTML = newText;
      }
    }

    function unhyphenateBook(bookElement) {
      const text = bookElement.innerHTML;
      const newText = text.replace('-<br>', '');
      bookElement.innerHTML = newText;
    }

    function hyphenateChronicles2(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Chronicles<br>2';
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Chronicl<br>2';
    } else if (CAST______________ === "Norsk") {
    newText = 'Krøniker<br>2';
    }
    bookElement.innerHTML = newText;
    }

    function unhyphenateChronicles2(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Chronicles 2';
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Chronicl 2';
    } else if (CAST______________ === "Norsk") {
    newText = 'Krøniker 2';
    }
    bookElement.innerHTML = newText;
    }

    function hyphenateSongofSolomon(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Song<br>of<br>Solomon';
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Caniad<br>Solomon';
    } else if (CAST______________ === "Norsk") {
    newText = 'Salomos<br>Sang';
    }
    bookElement.innerHTML = newText;
    }

    function unhyphenateSongofSolomon(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Song of Solomon';
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Caniad Solomon';
    } else if (CAST______________ === "Norsk") {
    newText = 'Salomos Sang';
    }
    bookElement.innerHTML = newText;
    }
    
    function hyphenateTimothy2(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Timothy<br>2'
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Timotheus<br>2';
    } else if (CAST______________ === "Norsk") {
    newText = 'Timoteus<br>2';
    }
    bookElement.innerHTML = newText;
    }

    function unhyphenateTimothy2(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Timothy 2'
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Timotheus 2';
    } else if (CAST______________ === "Norsk") {
    newText = 'Timotheus 2';
    }
    bookElement.innerHTML = newText;
    }

    function hyphenateCorinthians2(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Corinthians<br>2';
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Corinthiaid<br>2';
    } else if (CAST______________ === "Norsk") {
    newText = 'Korinterne<br>2';
    }
    bookElement.innerHTML = newText;
    }

    function unhyphenateCorinthians2(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = 'Corinthians 2'
    } else if (CAST______________ === "Cymraeg") {
    newText = 'Corinthians 2'
    } else if (CAST______________ === "Norsk") {
    newText = 'Korinterne 2';
    }
    bookElement.innerHTML = newText;
    }

    
    function hyphenateFirstEpistleofJohn(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = '<p><i>THE</i></p>First<br>Epistle of<br>John';
    } else if (CAST______________ === "Cymraeg") {
    newText = '<p><i>YR</i></p>Epistol<br>Cyntaf<br>Ioan';
    } else if (CAST______________ === "Norsk") {
    newText = '<p><i>DET</i></p>Første<br>Johannesbrev';
    }
    bookElement.innerHTML = newText;
    }

   
    function unhyphenateFirstEpistleofJohn(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = '<p><i>The</i></p>First Epistle of<br>John';
    } else if (CAST______________ === "Cymraeg") {
    newText = '<p><i>YR</i></p>Epistol Cyntaf<br>Ioan';
    } else if (CAST______________ === "Norsk") {
    newText = '<p><i>DET</i></p>Første<br>Johannesbrev';
    }
    bookElement.innerHTML = newText;
    }

    function hyphenateSecondEpistleofJohn(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = '<p><i>The</i></p>Second<br>Epistle of<br>John';
    } else if (CAST______________ === "Cymraeg") {
    newText = '<p><i>YR</i></p>Epistol<br>Ail<br>Ioan';
    } else if (CAST______________ === "Norsk") {
    newText = '<p><i>DET</i></p>Andre<br>Johannesbrev';
    }
    bookElement.innerHTML = newText;
    }

    function unhyphenateSecondEpistleofJohn(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = '<p><i>The</i></p>Second Epistle of<br>John';
    } else if (CAST______________ === "Cymraeg") {
    newText = '<p><i>YR</i></p>Epistol Ail<br>Ioan';
    } else if (CAST______________ === "Norsk") {
    newText = '<p><i>DET</i></p>Andre<br>Johannesbrev';
    }
    bookElement.innerHTML = newText;
    }

    function hyphenateThirdEpistleofJohn(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = '<p><i>The</i></p>Third<br>Epistle of<br>John';
    } else if (CAST______________ === "Cymraeg") {
    newText = '<p><i>YR</i></p>Epistol<br>Trydydd<br>Ioan';
    } else if (CAST______________ === "Norsk") {
    newText = '<p><i>DET</i></p>Tredje<br>Johannesbrev';
    }
    bookElement.innerHTML = newText;
    }

    function unhyphenateThirdEpistleofJohn(bookElement) {
    let newText;
    if (CAST______________ === "English") {
    newText = '<p><i>The</i></p>Third Epistle of<br>John';
    } else if (CAST______________ === "Cymraeg") {
    newText = '<p><i>YR</i></p>Epistol Trydydd<br>Ioan';
    } else if (CAST______________ === "Norsk") {
    newText = '<p><i>DET</i></p>Tredje<br>Johannesbrev';
    }
    bookElement.innerHTML = newText;
    }

    function checkHyphenationAfterUnhyphenation(book) {
      const bookElement = document.querySelector(`.Book[VECTOR="${book.name}"]`);
      const containerElement = document.querySelector('.BOOKS');
      const containerWidth = containerElement.clientWidth;
      const bookWidth = bookElement.getBoundingClientRect().width;

      if (bookWidth > containerWidth) {
        adjustHyphenation(book);
      }
    }

    function wrapFirstLetter() {
    const elements = document.querySelectorAll('.Book');

    elements.forEach(el => {
        const text = el.textContent;
        if (text.length === 0) return;
        
        const castVector = el.getAttribute('CAST-VECTOR');
        const specialTitles = ['FirstEpistleofJohn', 'SecondEpistleofJohn', 'ThirdEpistleofJohn', 'Revelation'];
        if (specialTitles.includes(castVector)) return;

        const wrappedLetterRegExp = /<span\b[^>]*>([^\s])<\/span>/;

        let html = el.innerHTML;

        if (wrappedLetterRegExp.test(html)) return;

        const wrappedHtml = html.replace(/^([^\s])/g, '<span>$1</span>');

        el.innerHTML = wrappedHtml;
    });
}

    function CAST_VECTOR() {
      Books.forEach(book => adjustHyphenation(book));
      setTimeout(() => {
      wrapFirstLetter();
      }, 74);
    }

    document.addEventListener('CS_____LANGUAGE', () => {
    CAST_VECTOR();
    document.dispatchEvent(new CustomEvent('CAST____C14_'));
    });


    let CAST_C14 = false;
    document.addEventListener('CAST_C14', () => {
    CAST_C14 = false;
    });
    document.addEventListener('CAST_C48', () => {
    CAST_C14 = true;
    });

    let resizeTimer;
    window.addEventListener('resize', function() {
    if (!CAST_C14) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(CAST_VECTOR, 740);
    }
    });
  });