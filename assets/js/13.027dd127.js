(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{369:function(a,e,v){"use strict";v.r(e);var t=v(42),_=Object(t.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[a._v("UWP 在跳转页面后会触发两个事件，这两个事件可能会给很多初入门的人带来困惑：")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Loaded()\nOnNavigatedTo()\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br")])]),v("h2",{attrs:{id:"一般用途"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一般用途"}},[a._v("#")]),a._v(" 一般用途")]),a._v(" "),v("ul",[v("li",[v("code",[a._v("Loaded")]),a._v("事件：一般在这里对页面进行初始化，"),a._v("如果是 MVVM 模式则可能需要对 ViewModel 进行初始化。")])]),a._v(" "),v("ul",[v("li",[v("code",[a._v("OnNavigatedTo")]),a._v("事件：一般用于页面间传值，展现页面之间的动画。触发该事件时，页面未必加载完成，如果使用后台代码更新 UI，可能会出现不可预知的问题，比如赋值无效、UI 对象为空等问题")])]),a._v(" "),v("h2",{attrs:{id:"正常顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正常顺序"}},[a._v("#")]),a._v(" 正常顺序")]),a._v(" "),v("p",[a._v("调用顺序是先"),v("code",[a._v("OnNavigatedTo")]),a._v("再"),v("code",[a._v("Loaded")]),a._v("，并且是"),v("code",[a._v("OnNavigatedTo")]),a._v("执行完才会执行"),v("code",[a._v("Loaded()")]),a._v("。即使在"),v("code",[a._v("OnNavigatedTo()")]),a._v("中执行以下语句")]),a._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Thread.Sleep(5000); //等待5秒\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("p",[a._v("也是"),v("code",[a._v("OnNavigatedTo()")]),a._v("函数执行完毕才执行"),v("code",[a._v("Loaded()")])]),a._v(" "),v("h2",{attrs:{id:"多线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[a._v("#")]),a._v(" 多线程")]),a._v(" "),v("p",[a._v("多线程情况下，虽然调用的顺序没有变化，但执行的先后顺序可能无法预测。即如果"),v("code",[a._v("OnNavigatedTo()")]),a._v("是异步函数，有可能会出现"),v("code",[a._v("OnNavigatedTo()")]),a._v("未执行完就执行"),v("code",[a._v("Loaded()")]),a._v("，甚至后者先执行完毕。\n因此建议始终不要让"),v("code",[a._v("OnNavigatedTo()")]),a._v("成为异步（"),v("code",[a._v("async")]),a._v("）函数，不要在"),v("code",[a._v("OnNavigatedTo()")]),a._v("中出现 await，保证"),v("code",[a._v("OnNavigatedTo()")]),a._v("执行顺序早于"),v("code",[a._v("Loaded()")]),a._v("。")]),a._v(" "),v("h2",{attrs:{id:"页面初始化正确顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面初始化正确顺序"}},[a._v("#")]),a._v(" 页面初始化正确顺序")]),a._v(" "),v("p",[a._v("由于"),v("code",[a._v("OnNavigatedTo")]),a._v("最好不能是异步函数，因此加载数据最好放在"),v("code",[a._v("Loaded")]),a._v("函数中，这也正是它应该要做的工作。因此正确的顺序应该是：")]),a._v(" "),v("ol",[v("li",[a._v("在"),v("code",[a._v("OnNavigatedTo")]),a._v("中展现页面间过渡动画")]),a._v(" "),v("li",[a._v("在"),v("code",[a._v("OnNavigatedTo")]),a._v("中接受到数据，进行简单的处理或不处理，并将数据使用私有字段临时存放。")]),a._v(" "),v("li",[a._v("在"),v("code",[a._v("Loaded")]),a._v("中对私有字段引用做判断，并进行初始化和稍复杂数据处理。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);