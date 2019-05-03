/*!
 * Path pattern: /issues/(\d+|new|copy)$
 * Insertion position: Bottom of issue form (チケット入力欄の下)
 * Type: JavaScript
 *
 * @brief   ウォッチャー追加時に検索するとチェックが外れる対策
 */
$(function() {
  $(document).on('change', '#users_for_watcher input:checkbox', function() {
    if ($('#users_for_watcher_buffer').length === 0) {
      $('#users_for_watcher')
        .after("<div id='users_for_watcher_buffer'></div>")
        .after('<hr />')
    }

    let clone = $(
      "#users_for_watcher_buffer input:checkbox[value='" + $(this).val() + "']"
    )

    if ($(this).prop('checked')) {
      if (clone.length === 0) {
        $('#users_for_watcher_buffer').append(
          $(this)
            .parent()
            .clone()
        )
      } else if (!clone.prop('checked')) {
        clone.prop('checked', true)
      }
    } else {
      if (clone.length > 0) {
        clone.parent().remove()
      }
    }
  })
})
