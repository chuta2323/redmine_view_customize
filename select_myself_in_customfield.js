/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue form (チケット入力欄の下)
 * Type: JavaScript
 *
 * @brief   カスタムフィールドで自分選択可
 */
$(function() {
  /* Get custom field of user list */
  $('select.user_cf').each(function() {
    let meOption = $(this)
      .find('option[value="' + ViewCustomize.context.user.id + '"]')
      .first()

    meOption
      .clone()
      .removeAttr('selected')
      .insertAfter($(this).find('option[value=""]'))
      .text('<<自分>>')
  })
})
