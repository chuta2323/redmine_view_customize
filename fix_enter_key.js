/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue detail (チケット詳細の下)
 * Type: JavaScript
 *
 * @brief   チケット編集時のエンターキー誤送信防止
 */
$(function() {
  $(document).on('keypress', '#issue-form input[type="text"]', function(event) {
    if (event.keyCode === 13) {
      return false
    }
  })
})
