/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue form (チケット入力欄の下)
 * Type: JavaScript
 *
 * @brief   送信ボタン押下時に進捗率を校正
 */
$(function() {
  /*!
   * @brief   Change the progress rate according to the ticket status
   * @param   none
   * @return  none
   */
  const changeProgressRate = function() {
    switch ($('#issue_status_id option:selected').val()) {
      case '1': // 新規
        $('#issue_done_ratio').val('0')
        break
      case '3': // 解決
      case '5': // 終了
        $('#issue_done_ratio').val('100')
        break
      default:
        /* do nothing */
        break
    }
  }

  /*!
   * @note  送信ボタン押下時の振る舞い
   */
  $('input[type="submit"]').click(function() {
    changeProgressRate()
  })

  /*!
   * @note  チケット編集時の振る舞い
   */
  changeProgressRate()
})
