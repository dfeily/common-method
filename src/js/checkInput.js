  /*验证是否有空白的输入框并弹出提示，提示为input自定义的data-tip*/
  function checkInputs($inputs) {
    let temp = true;
    $inputs.each(function () {//eslint-disable-line
      let _$this = $(this);
      if (temp && _$this.is(':visible') && ($.trim(_$this.val()) === '' || this.value === this.defaultValue)) { //eslint-disable-line
        _$this.click();
        _$this.focus();
        // $('html,body').animate({ scrollTop: $('.j-info-form').offset().top }, 0) - 60;//eslint-disable-line
        let tip = _$this.data('tip') || _$this.attr('placeholder');
        toast1.show ? toast1.show(tip) : alert(tip);//eslint-disable-line
        temp = false;
        return false;
      }
    });
    return temp;
  }
