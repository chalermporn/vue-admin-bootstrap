<template>
  <div id="wrapper">
    <docs-navbar></docs-navbar>
    <div class="bs-docs-header">
      <div class="container">
        <h1>VueAdminBootStrap</h1>
        <p>基于Bootstrap , jQuery 库为基础, 以 Vue.js 为框架 开发组件</p>
        <p>不含 bootstrap.js</p>
        <br>
        <p><a class="btn btn-outline-inverse btn-lg" href="https://github.com/liyanlong/vue-admin-bootstrap">Code on GitHub</a></p>
      </div>
    </div>
    <container>
            <div v-el:sections class="col-md-9">
                <modal-docs></modal-docs>
                <dropdown-docs></dropdown-docs>
                <popover-docs></popover-docs>
                <tooltip-docs></tooltip-docs>
                <tabs-docs></tabs-docs>
                <panel-docs></panel-docs>
                <topbar-docs></topbar-docs>
                <sidebar-docs></sidebar-docs>
                <checkbox-docs></checkbox-docs>
                <radio-docs></radio-docs>
                <button-group-docs></button-group-docs>
                <input-docs></input-docs>
                <select-docs></select-docs>
                <form-group-docs></form-group-docs>
                <date-time-picker-docs></date-time-picker-docs>
            </div>
            <div class="col-md-3">
                <affix-sidebar></affix-sidebar>
            </div>
    </container>
  </div>
  <footer class="bs-docs-footer">
    <div class="container">
      <p>组件参考了vue-strap, bootstrap的源码. 根据自身业务进行了筛选.</p>
      <p>Designed and built by <a href="https://github.com/liyanlong/">liyanlong</a>.</p>
    </div>
  </footer>
</template>

<script>
import container from './layout/container'
import docsNavbar from './layout/docsNavbar'
import affixSidebar from './layout/affixSidebar'

// docs
import modalDocs from './example/modalDocs'
import dropdownDocs from './example/dropdownDocs'
import popoverDocs from './example/popoverDocs'
import tooltipDocs from './example/tooltipDocs'
import tabsDocs from './example/tabsDocs'
import panelDocs from './example/panelDocs'
import topbarDocs from './example/topbarDocs'
import sidebarDocs from './example/sidebarDocs'

import checkboxDocs from './example/checkboxDocs'
import radioDocs from './example/radioDocs'
import buttonGroupDocs from './example/buttonGroupDocs'
import inputDocs from './example/inputDocs'
import selectDocs from './example/selectDocs'
import formGroupDocs from './example/formGroupDocs'
import dateTimePickerDocs from './example/dateTimePickerDocs'

export default {
    components: {
        container,
        docsNavbar,
        affixSidebar,
        modalDocs,
        popoverDocs,
        dropdownDocs,
        tooltipDocs,
        tabsDocs,
        panelDocs,
        topbarDocs,
        sidebarDocs,
        checkboxDocs,
        radioDocs,
        buttonGroupDocs,
        inputDocs,
        selectDocs,
        formGroupDocs,
        dateTimePickerDocs
    }
}
</script>
