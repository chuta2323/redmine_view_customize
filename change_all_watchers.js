/*!
 * Path pattern: /issuues/new$
 * Insertion position: Head of all pages (全てページのヘッダ)
 * Type: JavaScript
 *
 * @brief   ウォッチャーの全オン／全オフ機能
 */
$(function() {
  /*!
   * @brief   Change all the watchers ("Turn ON" or "Turn OFF")
   * @param   none
   * @return  none
   */
  const changeAllWatcher = function() {
    const watchMode = $(this).attr('data-watchmode')
    if (watchMode == 'allCheck') {
      $('#watchers_inputs input[type=checkbox]').prop('checked', true)
    } else if (watchMode == 'allOff') {
      $('#watchers_inputs input[type=checkbox]').prop('checked', false)
    } else {
    }
    $('#watchers_inputs')
      .find('span.watcher_sw_links a:hidden')
      .show()
    $(this).hide()
    return false
  }

  /* Show position of link */
  const $linksWatch = $('<span class="watcher_sw_links"></span>').prependTo(
    $('#watchers_inputs')
  )

  /* Turn on all the watchers */
  const turnOn = $('<a data-watchmode="allCheck" href="#" >[全オン]</a>')
    .prependTo($linksWatch)
    .click(changeAllWatcher)

  /* Turn off all the watchers */
  const turnOff = $('<a data-watchmode="allOff" href="#" >[全オフ]</a>')
    .prependTo($linksWatch)
    .click(changeAllWatcher)

  /* 初期表示フィルタを有効に */
  turnOff.click()

  $(document).ajaxComplete(function() //ajax更新後にトラッカー変更をチェック
  {
    turnOff.click()
  })
})
