"use strict";var _={$lw_blue10:"#ebf3fe",$lw_blue20:"#d4e4fd",$lw_blue30:"#a3c6fa",$lw_blue40:"#6ea6f7",$lw_blue50:"#3481f4",$lw_blue60:"#0d66e7",$lw_blue70:"#094cae",$lw_blue80:"#07377e",$lw_blue90:"#05285c",$lw_white:"#ffffff",$lw_grey10:"#f6f7f9",$lw_grey20:"#eaedf0",$lw_grey30:"#dcdfe5",$lw_grey40:"#cbd0d8",$lw_grey50:"#b0bac4",$lw_grey60:"#8d98a5",$lw_grey70:"#6c7a89",$lw_grey80:"#535e6a",$lw_grey90:"#3b424a",$lw_grey100:"#24292d",$lw_red50:"#ff4c33",$lw_red60:"#e81f02",$lw_red90:"#4d0900",$lw_green50:"#0cb639",$lw_green60:"#087d27",$lw_green90:"#013c12",$lw_highlight:"rgba(255, 240, 0, 0.24)",$lw_dimmed_overlay:"rgba(36, 41, 45, 0.34)",$lw_active_overlay:"rgba(36, 41, 45, 0.12)",$lw_hover_overlay:"rgba(36, 41, 45, 0.08)",$lw_shadow_01:"rgba(36, 41, 45, 0.28)",$lw_shadow_02:"rgba(36, 41, 45, 0.24)"},r={$color_background:_.$lw_white,$color_secondary_background:_.$lw_grey10,$color_primary_element:_.$lw_blue50,$color_secondary_element:_.$lw_blue90,$color_layout_01:_.$lw_white,$color_layout_02:_.$lw_grey10,$color_layout_03:_.$lw_grey20,$color_layout_04:_.$lw_grey40,$color_layout_05:_.$lw_grey30,$color_layout_emphasize_01:_.$lw_grey70,$color_layout_emphasize_02:_.$lw_grey80,$color_layout_emphasize_03:_.$lw_grey90,$color_danger:_.$lw_red50,$color_safe:_.$lw_green50,$color_hover_primary:_.$lw_hover_overlay,$color_hover_tertiary_button:_.$lw_blue50,$color_hover_danger_tertiary_button:_.$lw_red50,$color_focus_primary:_.$lw_blue70,$color_focus_accent:_.$lw_blue50,$color_focus_secondary:_.$lw_grey70,$color_focus_error:_.$lw_red50,$color_active_primary:_.$lw_active_overlay,$color_active_tertiary_button:_.$lw_blue60,$color_active_danger_tertiary_button:_.$lw_red60,$color_disabled_01:_.$lw_grey20,$color_disabled_02:_.$lw_grey50,$color_shadow_01:_.$lw_shadow_01,$color_shadow_02:_.$lw_shadow_02,$color_skeleton_01:_.$lw_grey20,$color_highlight_01:_.$lw_highlight,$color_dimmed_overlay:_.$lw_dimmed_overlay,$color_text_01:_.$lw_grey100,$color_text_02:_.$lw_grey90,$color_text_03:_.$lw_grey80,$color_text_04:_.$lw_grey70,$color_text_05:_.$lw_grey60,$color_text_error:_.$lw_red60,$color_text_safe:_.$lw_green60,$color_text_info:_.$lw_blue60,$color_text_accent:_.$lw_blue50,$color_text_danger:_.$lw_red50,$color_text_inverse:_.$lw_white,$color_text_disabled:_.$lw_grey50,$color_icon_01:_.$lw_grey100,$color_icon_02:_.$lw_grey90,$color_icon_03:_.$lw_grey80,$color_icon_04:_.$lw_grey70,$color_icon_danger:_.$lw_red50,$color_icon_safe:_.$lw_green50,$color_icon_accent:_.$lw_blue50,$color_icon_inverse_01:_.$lw_white,$color_icon_inverse_02:_.$lw_grey40,$color_icon_disabled:_.$lw_grey50,$color_button_primary:_.$lw_blue50,$color_button_secondary:_.$lw_grey30,$color_button_tertiary:_.$lw_blue50,$color_button_disabled:_.$lw_grey20,$color_button_danger:_.$lw_red50,$color_field_01:_.$lw_white,$color_field_disabled:_.$lw_grey20},e={size:{$size_00:"0px",$size_04:"8px",$size_08:"16px",$size_10:"20px",$size_12:"24px",$size_16:"32px",$size_20:"40px",$size_24:"48px",$size_28:"56px",$size_32:"64px",$size_36:"72px",$size_40:"80px",$size_44:"88px",$size_48:"96px",$size_r00:"0rem",$size_r04:"0.5rem",$size_r08:"1rem",$size_r10:"1.25rem",$size_r12:"1.5rem",$size_r16:"2rem",$size_r20:"2.5rem",$size_r24:"3rem",$size_r28:"3.5rem",$size_r32:"4rem",$size_r36:"4.5rem",$size_r40:"5rem",$size_r44:"5.5rem",$size_r48:"6rem"},button:{$sm:"24px",$md:"32px",$lg:"40px",$xl:"56px",$sm_r:"1.5rem",$md_r:"2rem",$lg_r:"2.5rem",$xl_r:"3.5rem"},icon:{$icon_xs:"16px",$icon_sm:"20px",$icon_md:"24px",$icon_lg:"32px",$icon_xl:"40px",$icon_xs_r:"1rem",$icon_sm_r:"1.25rem",$icon_md_r:"1.5rem",$icon_lg_r:"2rem",$icon_xl_r:"2.5rem"}},$={$spacing_00:"0px",$spacing_01:"2px",$spacing_02:"4px",$spacing_03:"6px",$spacing_04:"8px",$spacing_06:"12px",$spacing_08:"16px",$spacing_10:"20px",$spacing_12:"24px",$spacing_14:"28px",$spacing_16:"32px",$spacing_18:"36px",$spacing_20:"40px",$spacing_22:"44px",$spacing_24:"48px",$spacing_26:"52px",$spacing_28:"56px",$spacing_30:"60px",$spacing_32:"64px",$spacing_34:"68px",$spacing_36:"72px",$spacing_40:"80px",$spacing_44:"88px",$spacing_48:"96px",$spacing_56:"112px",$spacing_r00:"0rem",$spacing_r01:"0.125rem",$spacing_r02:"0.25rem",$spacing_r03:"0.375rem",$spacing_r04:"0.5rem",$spacing_r06:"0.75rem",$spacing_r08:"1rem",$spacing_r10:"1.25rem",$spacing_r12:"1.5rem",$spacing_r14:"1.75rem",$spacing_r16:"2rem",$spacing_r18:"2.25rem",$spacing_r20:"2.5rem",$spacing_r22:"2.75rem",$spacing_r24:"3rem",$spacing_r26:"3.25rem",$spacing_r28:"3.5rem",$spacing_r30:"3.75rem",$spacing_r32:"4rem",$spacing_r34:"4.25rem",$spacing_r36:"4.5rem",$spacing_r40:"5rem",$spacing_r44:"5.5rem",$spacing_r48:"6rem",$spacing_r56:"7rem"},o={$shadow_v1:`0 0 4px 0 ${_.$lw_shadow_01}`,$shadow_v2:`0 1px 8px 0 ${_.$lw_shadow_01}`,$shadow_v3:`0 2px 14px 0 ${_.$lw_shadow_02}`,$shadow_v4:`0 3px 24px 0 ${_.$lw_shadow_02}`,$shadow_hover:`inset 5rem 5rem ${r.$color_hover_primary}`,$shadow_active:`inset 5rem 5rem ${r.$color_active_primary}`,$shadow_dimmed:`inset 5rem 5rem ${r.$color_dimmed_overlay}`,$shadow_focus:` 0 0 0 1px ${r.$color_layout_01}, 0 0 0 2.5px ${r.$color_focus_primary}`},l={$shadow_v1:o.$shadow_v1,$shadow_v2:o.$shadow_v2,$shadow_v3:o.$shadow_v3,$shadow_v4:o.$shadow_v4};const c=_=>{let r={};return Object.keys(_).map((e=>Object.assign(r,{[e.substring(1)]:_[`${e}`]}))),r};var a={...c(r),...c(_),...c(e.size),...c($),...c(l)};module.exports=a;
//# sourceMappingURL=index.js.map
