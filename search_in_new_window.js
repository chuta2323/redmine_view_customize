/*!
 * Path pattern: .*
 * Insertion position: Head of all pages (全てのページのヘッダ)
 * Type: JavaScript
 *
 * @brief   検索ボックスの結果を新しいウィンドウで開く
 */
$(function() {
  $('#quick-search form').attr('target', '_blank')
})
