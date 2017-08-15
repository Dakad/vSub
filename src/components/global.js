/**
 * These components are registered globally, and can be read
 * anywhere within our app without importing them.
 *
 */
 
 export default {
   'spinner'        : require("./Spinner.vue"),
   
   'summarySearch'  : require("./summary/SearchBox.vue"),
   
   'actionsButtons' : require("./ActionsButtons.vue"),
   
   'tabs'           : require("./tabs/Tabs.vue"),
   'tabItem'            : require("./tabs/TabItem.vue"),
   
   'subs'           : require("./subs/Subs.vue"),
   'subItem'            : require("./subs/SubItem.vue"),
 
 }