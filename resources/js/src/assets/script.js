var eventElemArray = [];
var _count = 0;
var _countFix = 0;

scroll();
window.addEventListener('scroll', () => {
  scroll();
}, false);

function scroll() {
  eventElemArray = [];
  _count = 0;

  let elm = document.querySelectorAll('.index');
  let scrollTop = document.scrollingElement.scrollTop;
  let docHight = document.body.clientHeight;
  let winHight = window.parent.screen.height;

  elm.forEach(function (val, index) {
    let _id = val.id.replace(/\/|\{|\}/g, '');
    let nav = document.querySelector('#nav #' + _id);
    
    eventElemArray.push(val.offsetTop);
  })

  eventElemArray.forEach(function (_val, _index) {
    if (scrollTop + (winHight * 0.5) > eventElemArray[_index]) {
      _count++;
    }
  });

  if (_count !== _countFix) {
    _countFix = _count;
    document.querySelectorAll('#nav li').forEach(function (element) {
      element.classList.remove('current');
    });

    let _target = document.querySelectorAll('#nav li')[_count - 1];
    _target.classList.add('current');
  }
}