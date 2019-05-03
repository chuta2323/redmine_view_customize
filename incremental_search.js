/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue form (チケット入力欄の下)
 * Type: JavaScript
 *
 * @brief   担当者欄でインクリメンタルサーチ
 */
$(function() {
  const $SELECT = $('#issue_assigned_to_id')
  if ($SELECT.length == 0) {
    return
  }

  let options = $SELECT
    .find('option[value!=""]')
    .map(function() {
      return {
        label: $(this).text(),
        optionValue: $(this).val()
      }
    })
    .toArray()

  const $AUTOCOMPLETE = $(
    '<input type="text" class="ui-autocomplete-input autocomplete" autocomplete="off">'
  )
    .autocomplete({
      source: options,
      minLength: 0,
      select: function(event, ui) {
        $SELECT.val(ui.item.optionValue)
      },
      change: function(event, ui) {
        if (ui.item != null) {
          return
        }

        const MATCH_OPTION = $.grep(options, function(option) {
          return option.label == $AUTOCOMPLETE.val()
        })[0]

        if (MATCH_OPTION != null) {
          $SELECT.val(MATCH_OPTION.optionValue)
        } else {
          $AUTOCOMPLETE.val('')
          $SELECT.val('')
        }
      }
    })
    .focus(function() {
      $(this).autocomplete('search', '')
    })

  const CURRENT_SELECT_VAL = $SELECT.val()
  if (CURRENT_SELECT_VAL != '') {
    const INIT_AUTOCOMPLETE_VAL = $.grep(options, function(option) {
      return option.optionValue == CURRENT_SELECT_VAL
    })[0].label

    $AUTOCOMPLETE.val(INIT_AUTOCOMPLETE_VAL)
  }

  $SELECT.hide().after($AUTOCOMPLETE)

  $('.ui-autocomplete').css({
    'max-height': '250px',
    'overflow-y': 'auto',
    'overflow-x': 'hidden',
    'padding-right': '20px'
  })
})
