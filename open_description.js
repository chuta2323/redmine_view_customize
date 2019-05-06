/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue form (チケット入力欄の下)
 * Type: JavaScript
 *
 * @brief   説明欄を自動的に開く
 */
$(function() {
  $('span.icon.icon-edit')
    .closest('a')
    .hide()
  $('#issue_description_and_toolbar').show()
})
