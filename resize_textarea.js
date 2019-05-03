/*!
 * Path pattern: .*
 * Insertion position: Head of all pages (全てページのヘッダ)
 * Type: JavaScript
 *
 * @brief   テキストエリアのリサイズ
 */
$(function() {
  $(document).on('mouseenter', 'textarea', function() {
    $(this).resizable()
  })
})
