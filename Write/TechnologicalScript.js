$(function() {
	var intervalAction = setInterval(updateAction, 217),
	i = 0,
	action = ["Gott", 'Gud', 'Good', 'Cod', 'Duw', 'Deus', 'Dios', 'Dia', 'Day', 'Die', 'Devi', 'Death', 'Diyos', 'Deu', 'Do', 'Due', 'To', 'Divine', 'Haneunim', 'Herre', 'Junim', 'Jumala', 'Duality', 'Bozhe', 'Bog', 'Bhagavāna', 'Bondye', 'Burkhan', 'Buh', 'God', 'nine', 'GOD', 'nine', 'God', 'nine', 'GOD', 'nine', 'God', 'nine', 'GOD', 'nine', 'God', 'nine', 'God', 'nine', 'GOD'];
    function updateAction() {
	$('.WORD aWORD1').html(action[i++]);
	if (i == action.length) {
	i = 0
	}
    }
});

$(function() {
	var intervalAction = setInterval(updateAction, 270),
	i = 0,
	action = ['I', 'eye', 'aye', 'amen', 'aloheem', 'isis', 'iris', 'osirus', 'serious', 'IS'];
	function updateAction() {
	$('.WORD aWORD2').html(action[i++]);
	if (i == action.length) {
	i = 0
	}
    }
});