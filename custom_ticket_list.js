/*!
 * Path pattern: /issues$
 * Insertion position: Head of all pages (全てのページのヘッダ)
 * Type: JavaScript
 *
 * @brief   チケット一覧の進捗欄で進捗の値を表示
 */
$(function() {
  $('table.progress').each(function() {
    var match = $(this)
      .attr('class')
      .match(/progress-([0-9]+)/)
    if (!match) {
      return
    }

    $(this).after($('<p>').text(match[1]))
  })
})
