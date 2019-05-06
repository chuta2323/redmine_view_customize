/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue detail (チケット詳細の下)
 * Type: JavaScript
 *
 * @brief   履歴欄のシステムログフィルタ
 */
$(function() {
  if ($('#history').length) {
    $('#history > h3').after(
      '<p><form name="hist_filter">' +
        '<input type="checkbox" id="hist_filter">コメントのみ表示' +
        '</form></p>'
    )
    $('#hist_filter').click(function() {
      if ($(this).is(':checked')) {
        /* 注記を持たない履歴を非表示 */
        $('#history')
          .find('div.journal')
          .not('.has-notes')
          .hide()
        /* 注記を持つ履歴の注記以外の内容を非表示 */
        $('#history')
          .find('div.journal.has-notes')
          .find('ul.details')
          .hide()
      } else {
        $('#history')
          .find('div.journal')
          .show()
        $('#history')
          .find('div.journal.has-notes')
          .find('ul.details')
          .show()
      }
    })
  }
})
