/*1337570327,176833977*/

if (window.CavalryLogger) { CavalryLogger.start_js(["MEsJ2"]); }

__d("DevappContentOverlay",[],function(a,b,c,d,e,f){function g(h){var i=h.parentNode;h.style.width=i.offsetWidth+'px';h.style.height=i.offsetHeight+'px';}e.exports=g;});
__d("DeveloperWorkflowDialog",["Arbiter","AsyncRequest","Button","CSS","copyProperties","DOM","ge","$"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AsyncRequest'),i=b('Button'),j=b('CSS'),k=b('copyProperties'),l=b('DOM'),m=b('ge'),n=b('$');function o(p){this._stepCount=p;}o.STEP_LIST_ID='workflow_step_list';o.MAIN_CONTENT_ID='workflow_main_content';o.MAIN_STATUS_INDICATOR='workflow_stat_elem_main';o.SUBMIT_STATUS_INDICATOR='workflow_stat_elem_status';o.SUBMIT_BUTTON='workflow_submit_button';o.CLOSE_EVENT='devsite_workflow/close';o.OPEN_EVENT='devsite_workflow/open';o.DISABLE_FORWARD='devsite_workflow/disableforward';o.ENABLE_FORWARD='devsite_workflow/enableforward';o.TOGGLE_FORWARD='devsite_workflow/toggleforward';o.STEP_SELECTED_CLASS='uiStepSelected';o.STEP_NEXT_SELECTED_CLASS='uiStepNextSelected';o.STEP_LAST_SELECTED_CLASS='uiStepLastSelected';o.DEFAULT_FORWARD_BUTTON='Continue';k(o.prototype,{init:function(p,q){this._endpoint=p;this._dialog=q;this._forwardEnabled=true;this._dialog.subscribe('show',this._handleShow.bind(this));g.subscribe(o.CLOSE_EVENT,this._handleClose.bind(this));g.subscribe(o.OPEN_EVENT,this._handleOpen.bind(this));g.subscribe(o.DISABLE_FORWARD,this.disableForwardButton.bind(this));g.subscribe(o.ENABLE_FORWARD,this.enableForwardButton.bind(this));g.subscribe(o.TOGGLE_FORWARD,this.toggleForwardButton.bind(this));},setData:function(p){this._data=p;},setForwardButton:function(p){i.setLabel(n(o.SUBMIT_BUTTON),p);},disableForwardButton:function(){this._forwardEnabled=false;i.setEnabled(n(o.SUBMIT_BUTTON),this._forwardEnabled);},enableForwardButton:function(){this._forwardEnabled=true;i.setEnabled(n(o.SUBMIT_BUTTON),this._forwardEnabled);},toggleForwardButton:function(){this._forwardEnabled=!this._forwardEnabled;i.setEnabled(n(o.SUBMIT_BUTTON),this._forwardEnabled);},showSubmitStatusIndicator:function(){j.show(m(o.SUBMIT_STATUS_INDICATOR));},hideSubmitStatusIndicator:function(){j.hide(m(o.SUBMIT_STATUS_INDICATOR));},showMainStatusIndicator:function(){j.show(m(o.MAIN_STATUS_INDICATOR));},hideMainStatusIndicator:function(){j.hide(m(o.MAIN_STATUS_INDICATOR));},hideStatusIndicators:function(){this.hideSubmitStatusIndicator();this.hideMainStatusIndicator();},enableSubmitButton:function(){var p=n(o.SUBMIT_BUTTON);i.setEnabled(p,true);},updateStep:function(p){if(p>=this._stepCount)return;var q=l.scry(n(o.STEP_LIST_ID),'.uiStep');q.forEach(function(r){j.removeClass(r,o.STEP_SELECTED_CLASS);j.removeClass(r,o.STEP_NEXT_SELECTED_CLASS);j.removeClass(r,o.STEP_LAST_SELECTED_CLASS);});if(p>0)j.addClass(q[p-1],o.STEP_NEXT_SELECTED_CLASS);if(p==(this._stepCount-1))j.addClass(q[p],o.STEP_LAST_SELECTED_CLASS);j.addClass(q[p],o.STEP_SELECTED_CLASS);},_hideMainContentPane:function(){j.hide(m(o.MAIN_CONTENT_ID));},_handleShow:function(){this.updateStep(0);this.setForwardButton(o.DEFAULT_FORWARD_BUTTON);this.showMainStatusIndicator();this._hideMainContentPane();this._data.step_count=this._stepCount;new h(this._endpoint).setData(this._data).setMethod('POST').send();},_handleClose:function(p,q){this._dialog.hide();},_handleOpen:function(p,q){this.setData(q||{});this._dialog.show();}});o.open=function(p){g.inform(o.OPEN_EVENT,p);};e.exports=o;});
__d("DeveloperAppDetailsAppCenterPagelet",["Button","copyProperties","CSS","DeveloperWorkflowDialog","DOM","Form","Parent"],function(a,b,c,d,e,f){var g=b('Button'),h=b('copyProperties'),i=b('CSS'),j=b('DeveloperWorkflowDialog'),k=b('DOM'),l=b('Form'),m=b('Parent');function n(o,p,q){this.form=o.form;this.dialog=q;this.dialog.subscribe('confirm',function(t,u){k.find(this.form.getRoot(),'[type="submit"]').click();g.setEnabled(u,false);}.bind(this));Event.listen(p,'click',function(t){var u=m.byClass(t.getTarget(),'needToBeSaved');if(!u)return true;if(this.isDirty())return false;if(i.hasClass(u,'submitButton'))j.open();return true;}.bind(this));var r=k.scry(this.form.getRoot(),'.appCenterListedPlatformsHeading input[type="radio"]');for(var s=0;s<r.length;s++)Event.listen(r[s],'click',this.onListedPlatformsToggle.bind(this));}h(n.prototype,{isDirty:function(){if(!this.form.isDirty())return false;this.dialog.show();return true;},onListedPlatformsToggle:function(o){var p=o.getTarget(),q=p.getAttribute('data-platform');if(q)i.conditionShow(k.find(this.form.getRoot(),'div.screenshots_'+q),parseInt(p.value,10));}});e.exports=n;});
__d("DeveloperAppCenterImagePreview",["Arbiter"],function(a,b,c,d,e,f){var g=b('Arbiter'),h={subscribeUploadLink:function(i,j,k,l){g.subscribe(i,function(m,n){k.href='#';k.rel='';});g.subscribe(j,function(m,n){k.href=l;k.rel='dialog';});}};e.exports=h;});
__d("DeveloperAsyncDialog",["Arbiter","AsyncRequest","CSS","$"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AsyncRequest'),i=b('CSS'),j=b('$'),k={register:function(l,m,n,o,p,q,r){q.content_id=o;q.status_id=p;var s=Event.listen(l,'click',function(){m.show();k.showStatus(o,p);new h(n).setMethod('POST').setData(q).send();return false;});if(r)g.subscribe(r,function(t,u){s.remove();});},subscribe:function(l,m,n,o,p,q,r,s){g.subscribe(l,function(t,u){k.register(m,n,o,p,q,r,s);});},hideStatus:function(l,m){i.show(j(l));i.hide(j(m));},showStatus:function(l,m){i.hide(j(l));i.show(j(m));}};e.exports=k;});
__d("legacy:developer-workflow-dialog-js",["DeveloperWorkflowDialog"],function(a,b,c,d){a.DeveloperWorkflowDialog=b('DeveloperWorkflowDialog');},3);
__d("DialogHideOnSuccess",["copyProperties","CSS","cx"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('CSS'),i=b('cx');function j(k){this._layer=k;}g(j.prototype,{_subscription:null,enable:function(){this._subscription=this._layer.subscribe('success',this._handle.bind(this));},disable:function(){this._layer.unsubscribe(this._subscription);this._subscription=null;},_handle:function(k,event){if(h.hasClass(event.getTarget(),"cx-uiDialog__form"))this._layer.hide();}});e.exports=j;});
__d("LayerPage",["AccessibleLayer","Arbiter","Class","CSS","DOM","Layer","LayerButtons","LayerFormHooks","LayerHideOnCancel","LayerHideOnTransition","LayerMouseHooks","ModalLayer","Style","UserAgent","Vector","copyProperties"],function(a,b,c,d,e,f){var g=b('AccessibleLayer'),h=b('Arbiter'),i=b('Class'),j=b('CSS'),k=b('DOM'),l=b('Layer'),m=b('LayerButtons'),n=b('LayerFormHooks'),o=b('LayerHideOnCancel'),p=b('LayerHideOnTransition'),q=b('LayerMouseHooks'),r=b('ModalLayer'),s=b('Style'),t=b('UserAgent'),u=b('Vector'),v=b('copyProperties');function w(z,aa){this.parent.construct(this,z,aa);}i.extend(w,l);var x=15;v(w.prototype,{_width:null,_configure:function(z,aa){if(z.width)this._width=Math.floor(z.width);this.parent._configure(z,aa);},_getDefaultBehaviors:function(){return this.parent._getDefaultBehaviors().concat([y,g,m,o,p,q,n,r]);},updatePosition:function(){var z=k.find(this.getRoot(),'div.uiLayerPage');if(this._width){var aa=k.find(z,'div.uiLayerPageContent'),ba=this._width;if(j.hasClass(aa,'uiLayerPageDefaultPadding'))ba+=2*x;var ca=Math.floor(ba/-2);s.set(z,'margin-left',ca+'px');s.set(z,'width',ba+'px');}if(t.ie()<7)s.set(z,'top',u.getScrollPosition().y+'px');return true;}});function y(z){this._layer=z;}v(y.prototype,{_subscription:null,enable:function(){this._subscription=this._layer.subscribe(['show','hide'],function(z,aa){if(z==='show'){h.inform('layer_shown',{type:'LayerPage'});}else h.inform('layer_hidden',{type:'LayerPage'});});},disable:function(){this._layer.unsubscribe(this._subscription);this._subscription=null;}});e.exports=w;});
__d("LayerPageHideOnBlur",["Class","copyProperties","DOM","LayerHideOnBlur"],function(a,b,c,d,e,f){var g=b('Class'),h=b('copyProperties'),i=b('DOM'),j=b('LayerHideOnBlur');function k(l){this.parent.construct(this,l);}g.extend(k,j);h(k.prototype,{_getNodeToCheck:function(){return i.find(this._layer.getRoot(),'.uiOverlayContent');}});e.exports=k;});