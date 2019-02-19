/*1337583560,169776066*/

if (window.CavalryLogger) { CavalryLogger.start_js(["4RAIj"]); }

var PlaceActionLink={start_claim_link:function(a){var b=new AsyncRequest().setMethod('POST').setURI('/ajax/places/claim/start_claim.php').setData({id:a});new Dialog().setAsync(b).show();return false;},refer_claim_link:function(a){var b=new AsyncRequest().setMethod('POST').setURI('/ajax/places/claim/refer_claim.php').setData({id:a});new Dialog().setAsync(b).show();return false;}};
var TimelinePageMostRecent={init:function(a,b){if(!CSS.shown(a)){CSS.show(a);TimelineAggregatePost.setScrollHeight($(b));TimelineCapsule.balanceCapsule(Parent.byClass($(a),'fbTimelineCapsule'));}}};
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-_compat
* @option preserve-header
*/__d("uki-_compat",[],function(a,b,c,d,e,f){var g=Array.prototype,h=['indexOf','lastIndexOf','forEach','map','filter','reduce','reduceRight','every','some'];f.arrayFunctions=h;f.applyCompat=function(){f.forEach.call(h,function(i){if(!g[i])g[i]=f[i];});if(!Object.keys)Object.keys=f.keys;};f.indexOf=function(i,j){var k=this.length;if(j===undefined)j=0;if(j<0)j+=k;if(j<0)j=0;for(;j<k;j++)if(j in this&&this[j]===i)return j;return -1;};f.lastIndexOf=function(i,j){var k=this.length;if(j===undefined)j=k-1;if(j<0)j+=k;if(j>=k)j=k-1;while(j>=0)if(j in this&&this[j--]===i)return j;return -1;};f.forEach=function(i,j){for(var k=0,l=this.length;k<l;k++)if(k in this)i.call(j,this[k],k,this);};f.every=function(i,j){for(var k=0,l=this.length;k<l;k++)if(k in this&&!i.call(j,this[k],k,this))return false;return true;};f.some=function(i,j){for(var k=0,l=this.length;k<l;k++)if(k in this&&i.call(j,this[k],k,this))return true;return false;};f.map=function(i,j){var k=new Array(this.length);for(var l=0,m=this.length;l<m;l++)if(l in this)k[l]=i.call(j,this[l],l,this);return k;};f.filter=function(i,j){var k=[],l;for(var m=0,n=this.length;m<n;m++)if(m in this&&i.call(j,l=this[m],m,this))k.push(l);return k;};f.reduce=function(i,j){if(j===undefined)j=this[0];for(var k=0,l=this.length;k<l;k++)j=i.call(undefined,j,this[k],k,this);return j;};f.reduceRight=function(i,j){var k=this.length;if(j===undefined)j=this[k-1];for(var l=k-1;l>=0;l--)j=i.call(undefined,j,this[l],l,this);return j;};f.keys=function(i){var j=[],k;for(k in i)if(i.hasOwnProperty(k))j.push(k);return j;};f.trim=function(){return this.replace(/^\s*|\s*$/g,"");};});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-utils
* @option preserve-header
*/__d("uki-utils",["uki-_compat"],function(a,b,c,d,e,f){var g=Object.prototype.toString,h=Array.prototype,i=h.slice,j=f,k=b("uki-_compat"),l=h.forEach||k.forEach,m='__marked';function n(){}j.prop=function(p,q,r,s){if(r!==undefined){if(p[q]&&p[q].apply){p[q](r,s);}else p[q]=r;return p;}else if(p[q]&&p[q].apply){return p[q]();}else return p[q];};j.isFunction=function(p){return g.call(p)==="[object Function]";};j.isArray=function(p){return g.call(p)==="[object Array]";};j.toArray=function(p){return j.isArray(p)?i.call(p,0):j.map(p,function(q){return q;});};j.pluck=function(p,q){function r(s){return j.prop(s,q);}return p.map?p.map(r):j.map(p,r);};j.without=function(p,q){function r(s){return s!==q;}return p.filter?p.filter(r):j.filter(p,r);};j.invoke=function(p,q){var r=i.call(arguments,2),s=q?function(t){return t[q].apply(t,r);}:function(t){return t.apply(null,r);};return p.forEach?p.forEach(s):j.forEach(p,s);};j.forEach=function(p,q,r){var s,t=0,u=p.length;if(u===undefined){for(s in p){if(!s||p[s]===undefined||!p.hasOwnProperty(s))continue;if(q.call(r||p[s],p[s],s)===false)break;}}else l.call(p,q,r);return p;};j.values=function(p){var q=[];j.forEach(p,function(r){q.push(r);});return q;};j.unique=function(p){var q=[],r,s;if(p.length&&(typeof p[0]=='object'||typeof p[0]=='function')){for(r=0;r<p.length;r++){if(!p[r][m])q[q.length]=p[r];p[r][m]=true;}for(r=0;r<q.length;r++)delete q[r][m];return q;}else{var t={};for(r=0,s=p.length;r<s;r++){var u=p[r];if(!t[u]){t[u]=true;q.push(p[r]);}}return q;}};j.extend=function(){var p=arguments[0]||{},q=1,r=arguments.length,s;for(;q<r;q++)if((s=arguments[q])!=null)for(var t in s){if(!s.hasOwnProperty(t))continue;var u=s[t];if(u!==undefined)p[t]=u;}return p;};j.binarySearch=function(p,q,r,s){r=r===undefined?0:r;s=s===undefined?p.length:s;var t;while(r<s){t=(r+s)>>1;p[t]<q?r=t+1:s=t;}return r;};j.camelize=function(p){return p.replace(/[_-]\S/g,function(q){return q.substr(1).toUpperCase();});};j.dasherize=function(p){return p.replace(/[A-Z]/g,function(q){return '-'+q.toLowerCase();});};j.capitalize=function(p){return p.replace(/(^|\s)([a-z])/g,function(q,r,s){return r+s.toUpperCase();});};j.path2obj=function(p,q){var r=p.split('.');q=q||a;for(var s=0,t=r.length;q&&s<t;s++)q=q[r[s]];return q;};j.range=function(p,q){var r=new Array(q-p);for(var s=0;p<=q;p++,s++)r[s]=p;return r;};j.applyCompat=k.applyCompat;j.forEach(k.arrayFunctions,function(p){if(!j[p]){var q=Array.prototype[p]||k[p];j[p]=function(r,s,t){return q.call(r,s,t);};}});j.keys=Object.keys||k.keys;var o=String.prototype.trim||k.trim;j.trim=function(p){return o.call(p);};});
__d("insights-constants",["tx","uki-utils"],function(a,b,c,d,e,f){var g=b('tx'),h=b('uki-utils'),i={blue:'#3b5998',green:'#a9bc60',magenta:'#a856a1',teal:'#5d9d90',brown:'#886d4f'},j={API_ERROR_NUM_RETRIES:2,SEC_PER_DAY:24*60*60,MS_PER_DAY:24*60*60*1000,MS_PER_MINUTE:60*1000,DAYS_TO_LOOK_BACK:7,INSIGHTS_CUTOFF_TIME:1311058800,DEMOGRAPHICS_MIN_DATE_REACH:1315119600,DEMOGRAPHICS_MIN_PEOPLE_COUNT:30,CHECKINS_TYPE_MIN_DATE_TIMESTAMP:1320217200*1000,MissingValueString:'--',Periods:['day','week','days_28'],DaysInPeriod:{day:1,week:7,days_28:28},ReachTypeLabel:{total:"Yhteens\u00e4",organic:"Orgaaninen",paid:"Maksettu",viral:"Viraaliset"},ReachSourceTypes:['all','page_posts','stories'],ReachSourceTypeSelectorText:{all:"Kaikki sivun sis\u00e4lt\u00f6",page_posts:"Omat julkaisusi",stories:"Muiden tarinat"},BreakdownStoryTypes:['all','fan','page post','mention','user post'],BreakdownStoryTypesOptional:['question','coupon','checkin'],BreakdownStoryTypeSelectorText:{all:"Kaikki tarinat",fan:"Sivujen tykk\u00e4\u00e4miset",'page post':"Tarinoita julkaisuistasi",mention:"Maininnat ja kuvamerkinn\u00e4t",'user post':"Muiden julkaisut",checkin:"Paikkamerkinn\u00e4t",question:"Kysymykset",coupon:"Tarjoukset"},PostStoryTypes:{like:"Tykk\u00e4\u00e4miset",comment:"Kommentit",answer:"Vastaukset",rsvp:"Vastaukset kutsuihin",share:"Jaot",post:"Julkaisut",claim:"Tarjouslunastukset",other:"Muut"},EngagementBreakdownBuckets:{stories:'stories',link_clicks:'link clicks',photo_views:'photo view',video_plays:'video play',other:'other clicks'},EngagementBreakdownLegend:{stories:"Luodut tarinat",'link clicks':"Linkin klikkaukset",'other clicks':"Muut klikkaukset",'photo view':"Kuvien n\u00e4ytt\u00f6kerrat",'video play':"Videotoistot"},LikeSources:{page_suggestion:"Yll\u00e4pit\u00e4j\u00e4n kutsu",timeline:"Aikajana",ads:"Mainokset ja sponsoroidut tarinat",registration:"Yll\u00e4pit\u00e4j\u00e4n rekister\u00f6inti",mobile:"Mobiililaite",wizard_suggestion:"Ohjattu uuden k\u00e4ytt\u00e4j\u00e4n lis\u00e4\u00e4minen",social_graph:"Tykk\u00e4\u00e4misten hallinta",profile_connect:"Sivulla, uutisissa tai uutisnauhassa",external_connect:"Tykk\u00e4\u00e4-laatikko ja -painike",recommended_pages:"Facebook-suositukset",external_page_like:"Ulkoinen tykk\u00e4ys",favorites:"Muiden sivujen sivutykk\u00e4\u00e4miset",api:"Kolmansien osapuolten sovellukset",page_browser:"Sivuselain",hovercard:"Osoitukset",search:"Hakutulokset",page_profile:"Sivulla",ticker:"Uutisnauha",like_story:"Kaverien viittaukset",nearby_dash:"L\u00e4heiset paikat",from_coupon:"Tarjous",video_flyout:"Video"},LikeSourcesDeprecatedAggregations:{profile_connect:['hovercard','search','page_profile','ticker','like_story']},Tabs:{wall:"Sein\u00e4",info:"Tiedot",photos:"Kuvat",friendactivity:"Kaverien toiminta",videos:"Videot",events:"Tapahtumat",pe:"Menneet tapahtumat"},FrequencyBuckets:['1','2','3','4','5','6-10','11-20','21+'],AgeBuckets:['13-17','18-24','25-34','35-44','45-54','55+'],PostIcons:{photo:'/images/icons/photo.gif',link:'/images/icons/post.gif',coupon:'/images/icons/offers.png',post:'/images/icons/wall_post.gif'},LOADING_IMAGE:'/images/loaders/indicator_blue_small.gif',ColorsMap:i,Colors:h.values(i),TICK_SIZE_THRESHOLD:42,TICK_SIZE_SHORT:7,TICK_SIZE_LONG:14,GraphMaxPoints:{Likes:60,Reach:30,Visits:120,Talking:60,ViralReach:60,CheckinsType:120},GraphType:{BAR:0,AREA:1,LINE:2},ReachBreakdownColors:[i.blue,i.green,i.magenta],EngagementGraphColors:[i.blue,'#758ab7','#b1bdd6','#e2e6f0'],TalkingBreakdownColors:[i.green,'#c3d08f','#dde4bf','#f2f5e7'],PrivacyIcons:{CUSTOM:'/images/privacy/lock_grey.gif',EVERYONE:'/images/icons/audience/feed/everyone.png'},DateFormat:{'n/j/y':'n/j/y','M j':'M j','M j, Y':'M j, Y','m/d/Y g:ia':'m/d/Y g:ia'},MonthAbbrev:{1:'Jan',2:'Feb',3:'Mar',4:'Apr',5:'May',6:'Jun',7:'Jul',8:'Aug',9:'Sep',10:'Oct',11:'Nov',12:'Dec'},AbbrevNumberFormat:{0:'{x0}',1:'{x0}',2:'{x0}',3:'{x3}K',4:'{x3}K',5:'{x3}K',6:'{x6}M',7:'{x6}M',8:'{x6}M',9:'{x9}B',10:'{x9}B',11:'{x9}B'},DecimalSeparator:'.',NumberDelimiter:',',Locale:'en_US',TimeAM:'am',TimePM:'pm',setIntlFormatData:function(k){if(k){this.Locale=k.locale||this.Locale;this.DateFormat=k.date_format||this.DateFormat;this.MonthAbbrev=k.month_abbrev||this.MonthAbbrev;this.AbbrevNumberFormat=k.abbrev_number_format||this.AbbrevNumberFormat;this.DecimalSeparator=k.decimal_separator||this.DecimalSeparator;this.NumberDelimiter=k.number_delimiter||this.NumberDelimiter;this.TimeAM=k.time_am||this.TimeAM;this.TimePM=k.time_pm||this.TimePM;}},PST_OFFSET_MS:8*60*60*1000,PDT_OFFSET_MS:7*60*60*1000,getPTOffset:function(k){if(k<=1.32057e+12){return j.PDT_OFFSET_MS;}else if(k<=1.33146e+12){return j.PST_OFFSET_MS;}else if(k<=1352019600000){return j.PDT_OFFSET_MS;}else if(k<=1362909600000){return j.PST_OFFSET_MS;}else if(k<=1383469200000){return j.PDT_OFFSET_MS;}else if(k<=1394359200000){return j.PST_OFFSET_MS;}else if(k<=1414918800000){return j.PDT_OFFSET_MS;}else if(k<=1425808800000){return j.PST_OFFSET_MS;}else if(k<=1446368400000){return j.PDT_OFFSET_MS;}else return j.PST_OFFSET_MS;},Events:{Ready:'ready',Plotted:'plotted',ShowMorePosts:'showMorePosts',Error:'error'},InternalFBApps:{Photos:'2305272732',Video:'2392950137',Mobile:'2915120374'},MAX_INT:9007199254740992};j.InternalFBAppsIDs=(function(){var k={};h.forEach(j.InternalFBApps,function(l,m){k[l]=m;});return k;})();f.InsightsConstants=j;});
__d("insights-date-utils",["insights-constants"],function(a,b,c,d,e,f){var g=b('insights-constants').InsightsConstants,h={shortDate:function(p){return h._applyFormat(g.DateFormat['n/j/y'],p);},dateAndTime:function(p,q){return h._applyFormat(g.DateFormat['m/d/Y g:ia'],p,q);},abbrevMonthDateFromTimestamp:function(p){return h._applyFormat(g.DateFormat['M j'],new Date(p));},abbrevMonthAndYear:function(p){return h._applyFormat(g.DateFormat['M j, Y'],new Date(p));},_applyFormat:function(p,q,r){var s=null;if(r){var t=q.getTimezoneOffset()*g.MS_PER_MINUTE;s=new Date(q.getTime()-t);}else{var u=q.getTime()-g.getPTOffset(q.getTime());s=new Date(g.MS_PER_DAY*Math.round(u/g.MS_PER_DAY));}return p.replace(/(\\)?y/g,function(v,w){return w?v:(''+s.getUTCFullYear()).substr(2);}).replace(/(\\)?Y/g,function(v,w){return w?v:s.getUTCFullYear();}).replace(/(\\)?(j|d)/g,function(v,w){return w?v:s.getUTCDate();}).replace(/(\\)?(m|n)/g,function(v,w){return w?v:s.getUTCMonth()+1;}).replace(/(\\)?(F|M)/g,function(v,w){return w?v:h._escapeLetters(g.MonthAbbrev[s.getUTCMonth()+1]);}).replace(/(\\)?(G|H)/g,function(v,w){return w?v:s.getUTCHours();}).replace(/(\\)?(g|h)/g,function(v,w){return w?v:(s.getUTCHours()%12===0?12:s.getUTCHours()%12);}).replace(/(\\)?(m|i)/g,function(v,w){var x=s.getUTCMinutes();return w?v:x<10?'0'+x:x;}).replace(/(\\)?a/g,function(v,w){return w?v:h._escapeLetters(s.getUTCHours()<12?g.TimeAM:g.TimePM);}).replace(/\\/g,'');},_escapeLetters:function(p){return p.replace(/[a-zA-Z]/g,function(q){return '\\'+q;});},fullRange:function(p){var q={since:this.shortDate(new Date(p.since*1000)),until:this.shortDate(new Date(p.until*1000))};q.date=q.until;return q;},periodRange:function(p){var q=k(new Date(p.until*1000),p.period),r={since:h.shortDate(q),until:h.shortDate(new Date(p.until*1000))};r.date=r.until;return r;},weekRangeString:function(p){var q=h.periodRange({until:p/1000,period:'week'});return q.since+' - '+q.until;}},i=function(p){var q=new Date(p.getTime()-g.getPTOffset(p.getTime()));return new Date(q.getUTCFullYear(),q.getUTCMonth(),q.getUTCDate());},j=function(p,q){if(!q)p=o(p);return new Date(p);},k=function(p,q){var r=new Date(p);r.setDate(r.getDate()-(g.DaysInPeriod[q]-1));return r;},l=function(p){var q={since:(n(p.since*1000)/1000)-1,until:n(p.until*1000)/1000};if(p.date_threshold&&p.date_threshold<=q.until)q.until=p.date_threshold;return q;},m=function(p,q){var r=[],s=p;while(s<=q){r.push(s);s=n(s);}return r;},n=function(p){var q=g.getPTOffset(p),r=g.getPTOffset(p+g.MS_PER_DAY);return p+g.MS_PER_DAY+r-q;},o=function(p){var q=g.getPTOffset(p),r=g.getPTOffset(p-g.MS_PER_DAY);return p-g.MS_PER_DAY+r-q;};f.mostRecentMidnightPT=i;f.endTimeToDate=j;f.rangeForAPIQuery=l;f.midnightsInRange=m;f.nextMidnight=n;f.previousMidnight=o;f.DateFormatter=h;});
__d("insights-number-utils",["insights-constants"],function(a,b,c,d,e,f){var g=b('insights-constants').InsightsConstants,h={magnitude:function(i){return i>=10?Math.floor(Math.log(i)/Math.log(10)):0;},abbrevInt:function(i){var j=h.magnitude(i),k=Math.round(i/Math.pow(10,j));if(k==10){k=1;j++;}var l=g.AbbrevNumberFormat[j]||'{x0}',m=l.replace(/(.*)(\{x(\d+)\})(.*)/,function(o,p,q,r,s){return p+h.decimal(i/Math.pow(10,r))+s;}),n=h.integer(i);return m.length>=n.length||m==i?n:m;},decOrInt:function(i){return i===Math.floor(i)?h.integer(i):h.decimal(i);},integer:function(i){if(i==null||i==='')return g.MissingValueString;var j=''+i;if(i<10000&&(g.Locale=='nb_NO'||g.Locale=='nn_NO'))return j;var k=/(\d+)(\d{3})/;while(k.test(j))j=j.replace(k,'$1'+g.NumberDelimiter+'$2');return j;},percent:function(i){return h.round(i*100,2)+'%';},decimal:function(i){return h.round(i,1);},round:function(i,j,k){var l=Math.pow(10,j),m=(Math.round(i*l)/l+'').replace('.',g.DecimalSeparator);if(!j||!k)return m;var n=m.indexOf(g.DecimalSeparator),o=0;if(n==-1){m+=g.DecimalSeparator;o=j;}else o=j-(m.length-n-1);for(var p=0;p<o;p++)m+='0';return m;}};f.NumberFormatter=h;});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-env
* @option preserve-header
*/__d("uki-env",[],function(a,b,c,d,e,f){f.root=a;f.doc=f.root.document||{};f.docElem=f.doc.documentElement;f.nav=f.root.navigator||{};f.ua=f.nav.userAgent||'';f.guid=1;f.expando='uki'+(+new Date());});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-function
* @option preserve-header
*/__d("uki-function",["uki-env","uki-utils"],function(a,b,c,d,e,f){var g=b("uki-env"),h=b("uki-utils"),i=Array.prototype;function j(){}var k=f;k.bind=function(s,t){var u=i.slice.call(arguments,2),v=u.length?function(){return s.apply(t||this,u.concat(h.toArray(arguments)));}:function(){return s.apply(t||this,arguments);};v.bound=true;return v;};k.bindOnce=function(s,t){if(s.bound)return s;s.huid=s.huid||g.guid++;var u='__bind_'+s.huid;t[u]=t[u]||k.bind(s,t);return t[u];};k.newClass=function(){var s,t=arguments.length,u=arguments[0],v=arguments[t-1],w,x,y,z,aa=t>1&&u.prototype&&u;if(h.isFunction(v)){y=[];z=function(){w.apply(this,arguments);};}else if(v&&v.init){z=v.init;}else if(aa){z=function(){aa.apply(this,arguments);};}else z=function(){};if(aa){j.prototype=aa.prototype;z.prototype=new j();y&&y.push(aa.prototype);for(var ba in aa)if(!z[ba])z[ba]=aa[ba];}for(s=aa?1:0;s<t-1;s++){h.extend(z.prototype,arguments[s]);y&&y.push(arguments[s]);}if(v){if(h.isFunction(v)){x={};v.apply(x,y);w=x.init||k.FS;}else x=v;h.extend(z.prototype,x);}z.prototype.constructor=z;return z;};function l(s,t){s=s||'_p'+g.guid++;var u='_'+s;if(t){return function(v){if(!arguments.length)return this[u];t.apply(this,arguments);return this;};}else return function(v){if(!arguments.length)return this[u];this[u]=v;return this;};}k.newProp=l;k.addProp=k.addProps=function(s,t,u){if(h.isArray(t)){for(var v=0,w=t.length;v<w;v++)s[t[v]]=l(t[v],u&&u[v]);}else s[t]=l(t,u);};function m(s,t){return function(u){var v=h.prop(this,s);if(u===undefined)return v?h.prop(v,t):null;v&&h.prop(v,t,u);return this;};}k.newDelegateProp=m;k.delegateProp=function(s,t,u,v){if(h.isArray(t)){h.forEach(t,function(w,x){k.delegateProp(s,w,u,v&&v[x]);});}else{v=v||t;s[t]=m(u,v);}};function n(s,t){return function(){var u=h.prop(this,s);return u[t].apply(u,arguments);};}k.newDelegateCall=n;k.delegateCall=function(s,t,u,v){if(h.isArray(t)){h.forEach(t,function(w,x){k.delegateCall(s,w,u,v&&v[x]);});}else{v=v||t;s[t]=n(u,v);}};function o(s,t,u){var v;return function(){var w=this,x=arguments;if(u&&v)v=clearTimeout(v);v=v||setTimeout(function(){v=null;s.apply(w,x);},t);};}k.throttle=function(s,t){return o(s,t);};k.debounce=function(s,t){return o(s,t,true);};k.defer=function(s){return a.setTimeout(s,0);};var p={},q=[];k.deferOnce=function(s,t){if(t)s=k.bindOnce(s,t);s.huid=s.huid||g.guid++;if(p[s.huid])return;p[s.huid]=true;q.push(s);if(q.length===1)k.defer(r);};function r(){var s=q;q=[];p={};h.invoke(s);}k.FF=function(){return false;};k.FT=function(){return true;};k.FS=function(){return this;};});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-dom
* @option preserve-header
*/__d("uki-dom",["uki-env","uki-utils"],function(a,b,c,d,e,f){var g=b("uki-env"),h=b("uki-utils"),i={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'};e.exports={createElement:function(j,k,l){var m=g.doc.createElement(j);h.forEach(k||{},function(n,o){if(o=='style'){m.style.cssText=n;}else if(o=='html'){m.innerHTML=n;}else if(o=='className'){m.className=n;}else m.setAttribute(o,n);});l&&h.forEach(l,function(n){m.appendChild(n);});return m;},removeElement:function(j){if(j&&j.parentNode)j.parentNode.removeChild(j);},createStylesheet:function(j){var k=g.doc.createElement('style');g.doc.getElementsByTagName('head')[0].appendChild(k);if(k.styleSheet){k.styleSheet.cssText=j;}else k.appendChild(g.doc.createTextNode(j));return k;},computedStyle:function(j){if(g.doc.defaultView&&g.doc.defaultView.getComputedStyle){return g.doc.defaultView.getComputedStyle(j,null);}else if(j.currentStyle)return j.currentStyle;},fromHTML:function(j){var k=g.doc.createElement('div');k.innerHTML=j;return k.firstChild;},clientRect:function(j,k){var l=j.getBoundingClientRect();l={top:Math.round(l.top),bottom:Math.round(l.bottom),left:l.left,right:l.right};l.width=l.right-l.left;l.height=l.bottom-l.top;if(k)return l;var m=g.doc.body,n=g.docElem,o=g.root.pageYOffset||m.scrollTop||(n&&n.scrollTop)||0,p=g.root.pageXOffset||m.scrollLeft||(n&&n.scrollLeft)||0;l.top+=o;l.left+=p;return l;},hasClass:function(j,k){return (' '+j.className+' ').indexOf(' '+k+' ')>-1;},addClass:function(j,k){var l=j.className;h.forEach(k.split(/\s+/),function(m){if(!this.hasClass(j,m))l+=(l?' ':'')+m;},this);j.className=l;},removeClass:function(j,k){var l=j.className;h.forEach(k.split(/\s+/),function(m){l=h.trim(l.replace(new RegExp('(^|\\s)'+m+'(?:\\s|$)','g'),' ').replace(/\s{2,}/g,' '));},this);j.className=l;},toggleClass:function(j,k,l){if(l===undefined)l=!this.hasClass(j,k);l?this.addClass(j,k):this.removeClass(j,k);},escapeHTML:function(j){return (j+'').replace(/[&<>\"\']/g,function(k){return i[k];});}};});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-view
* @option preserve-header
*/__d("uki-view",["uki-utils","uki-function","uki-env"],function(a,b,c,d,e,f){var g=b("uki-utils"),h=b("uki-function"),i=b("uki-env"),j={},k={};e.exports={register:function(l){j[l.dom()[i.expando]]=l;},unregister:function(l){delete j[l.dom()[i.expando]];},registerId:function(l){k[g.prop(l,'id')]=l;},unregisterId:function(l){delete k[g.prop(l,'id')];},byId:function(l){return k[l];},closest:function(l){while(l){var m=l[i.expando];if(j[m])return j[m];l=l.parentNode;}return null;},contains:function(l,m){while(m){if(m==l)return true;m=m.parent();}return false;},newClass:function(l){var m=h.newClass.apply(h,g.toArray(arguments).slice(1));m.prototype.typeName=l;return m;},newToggleClassProp:function(l){return function(m){if(m===undefined)return this.hasClass(l);return this.toggleClass(l,m);};},newClassMapProp:function(l){return function(m){if(m===undefined){var n='';g.forEach(l,function(o,p){if(this.hasClass(o)){n=p;return false;}},this);return n;}g.forEach(l,function(o,p){this.toggleClass(o,m===p);},this);return this;};}};});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-event
* @option preserve-header
*/__d("uki-event",["uki-utils","uki-function","uki-dom","uki-env","uki-view"],function(a,b,c,d,f,g){var h=b("uki-utils"),i=b("uki-function"),j=b("uki-dom"),k=b("uki-env"),l=k.expando;function m(){}var n={targetView:function(){if(!this._targetView)this._targetView=b("uki-view").closest(this.target);return this._targetView;},preventDefault:function(){var e=this.baseEvent;if(e.preventDefault){e.preventDefault();}else e.returnValue=false;this.isDefaultPrevented=i.FT;},stopPropagation:function(){var e=this.baseEvent;if(e.stopPropagation){e.stopPropagation();}else e.cancelBubble=true;this.isPropagationStopped=i.FT;},isDefaultPrevented:i.FF,isPropagationStopped:i.FF};function o(){}h.extend(o.prototype,n);function p(e){if(!e.target)e.target=e.srcElement||k.doc;if(e.target.nodeType===3)e.target=e.target.parentNode;if(!e.relatedTarget&&e.fromElement)e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement;if(e.pageX==null&&e.clientX!=null){var x=k.doc,y=k.docElem,z=x.body;e.pageX=e.clientX+(x&&x.scrollLeft||z&&z.scrollLeft||y&&y.scrollLeft||0)-(x&&x.clientLeft||z&&z.clientLeft||0);e.pageY=e.clientY+(x&&x.scrollTop||z&&z.scrollTop||y&&y.scrollTop||0)-(x&&x.clientTop||z&&z.clientTop||0);}if(e.which==null&&(e.charCode!=null||e.keyCode!=null))e.which=e.charCode!=null?e.charCode:e.keyCode;e.metaKey=e.metaKey||e.ctrlKey;if(!e.which&&e.button!==undefined)e.which=(e.button&1?1:(e.button&2?3:(e.button&4?2:0)));return e;}var q={},r={},s="altKey attrChange attrName bubbles button cancelable charCode clientX clientY clipboardData ctrlKey currentTarget data dataTransfer detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement type view wheelDelta which".split(" ");function t(e){e=e||k.root.event;var x=u(e);w.trigger(this,p(x));}function u(x){e=new o();e.baseEvent=x;for(var y=s.length,z;y>=-1;y--){z=s[y];e[z]=x[z];}e.simulatePropagation=false;return e;}function v(x,y){m.prototype=x;e=new m();h.extend(e,n);e.baseEvent=x;e.simulatePropagation=x.simulatePropagation===undefined?true:x.simulatePropagation;h.extend(e,y);return e;}var w=f.exports={wrapDomEvent:u,createEvent:v,special:{},listeners:q,domHandlers:r,EventMethods:n,trigger:function(e,x){var y=q[e[l]]||{},z=y[x.type];if(!x.target)x.target=e;z&&h.forEach(z,function(aa){aa.call(e,x);});if(x.simulatePropagation&&!x.isPropagationStopped()&&e.parentNode)w.trigger(e.parentNode,x);},addListener:function(e,x,y){var z=e[l]=e[l]||k.guid++;h.forEach(x.split(' '),function(aa){q[z]=q[z]||{};if(!q[z][aa])if(w.special[aa]){w.special[aa].setup(e);}else{r[z]=r[z]||i.bind(t,e);e.addEventListener?e.addEventListener(aa,r[z],false):e.attachEvent('on'+aa,r[z]);}q[z][aa]=q[z][aa]||[];q[z][aa].push(y);});},removeListener:function(e,x,y){var z=e[l];if(!z||!q[z])return;x||(x=h.keys(q[z]).join(' '));h.forEach(x.split(' '),function(aa){if(!q[z][aa])return;q[z][aa]=y?h.without(q[z][aa],y):[];if(!q[z][aa].length){if(w.special[aa]){w.special[aa].teardown(e);}else e.removeEventListener?e.removeEventListener(aa,r[z],false):e.detachEvent('on'+aa,r[z]);delete q[z][aa];}});},preventDefaultHandler:function(e){e&&e.preventDefault();return false;}};w.on=w.addListener;h.forEach({mouseover:'mouseenter',mouseout:'mouseleave'},function(e,x){function y(z){var aa=z.relatedTarget;try{while(aa&&aa!==this)aa=aa.parentNode;if(aa!==this){var ba=v(z,{type:e,simulatePropagation:true});w.trigger(this,ba);}}catch(z){}}w.special[e]={setup:function(z,aa){w.on(z,x,y);},teardown:function(z,aa){w.removeListener(z,x,y);}};});});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-binding
* @option preserve-header
*/__d("uki-binding",["uki-function","uki-utils"],function(a,b,c,d,e,f){var g=b("uki-function"),h=b("uki-utils"),i=g.newClass({view:null,model:null,modelProp:'value',viewProp:'value',modelEvent:'',viewEvent:'blur',init:function(j){h.extend(this,j);if(!this.modelEvent)this.modelEvent='change.'+this.modelProp;if(this.model&&this.view){this.view.on(this.viewEvent,g.bindOnce(this.updateModel,this));this.model.on(this.modelEvent,g.bindOnce(this.updateView,this));if(this.sync!==false)this.updateView();}},destruct:function(){if(this.model&&this.view){this.view.removeListener(this.viewEvent,g.bindOnce(this.updateModel,this));this.model.removeListener(this.modelEvent,g.bindOnce(this.updateView,this));}},viewValue:function(j){return h.prop(this.view,this.viewProp,j);},modelValue:function(j){return h.prop(this.model,this.modelProp,j,this);},updateModel:function(j){this._lockUpdate(function(){this.modelValue(this.viewValue());});},updateView:function(j){this._lockUpdate(function(){this.viewValue(this.modelValue());});},_lockUpdate:function(j){if(!this._updating&&this.viewValue()!=this.modelValue()){this._updating=true;try{j.call(this);}catch(k){this._updating=false;throw k;}this._updating=false;}}});f.Binding=i;});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-view-base
* @option preserve-header
*/__d("uki-view-base",["uki-view","uki-utils","uki-function","uki-env","uki-dom","uki-event","uki-binding"],function(a,b,c,d,e,f){var g=b("uki-view"),h=b("uki-utils"),i=b("uki-function"),j=b("uki-env"),k=b("uki-dom"),l=b("uki-event"),m=b("uki-binding").Binding,n=['top','right','left','bottom','width','height','marginLeft','marginTop','marginBottom','marginRight'],o={t:'top',r:'right',l:'left',b:'bottom',w:'width',h:'height',ml:'marginLeft',mr:'marginRight',mt:'marginTop',mb:'marginBottom'};function p(s){if(typeof s==='string')return s;var t=[];h.forEach(s,function(u,v){t.push(h.dasherize(v)+':'+u);});return t.join(';');}var q=g.newClass('Base',{init:function(s){s=s||{};this._setup(s);this._createDom(s);this.dom()[j.expando]=this.dom()[j.expando]||j.guid++;g.register(this);},destruct:function(){g.unregisterId(this);g.unregister(this);this.removeListener();this.bindings([]);this.destructed=true;},_setup:i.FS,_createDom:function(s){this._dom=k.createElement(s.tagName||'div');},_initLayout:i.FS,_layout:i.FS,layout:function(){if(this.visible()){if(!this._layoutBefore){this._layoutBefore=true;this._initLayout();}this._layout();}return this;},layoutIfVisible:function(){if(this.dom()&&this.dom().offsetWidth)this.layout();return this;},dom:function(){return this._dom;},visible:i.newProp('visible',function(s){var t=this.visible();this._visible=s;this.dom().style.display=s?'':'none';if(s&&!t)this.layoutIfVisible();return this;}),_visible:true,html:i.newDelegateProp('dom','innerHTML'),text:function(s){return this.html(s&&k.escapeHTML(s));},id:function(s){if(s===undefined)return this.dom().id;if(this.dom().id)g.unregisterId(this);this.dom().id=s;g.registerId(this);return this;},className:i.newDelegateProp('dom','className'),addClass:function(s){k.addClass(this.dom(),s);return this;},hasClass:function(s){return k.hasClass(this.dom(),s);},removeClass:function(s){k.removeClass(this.dom(),s);return this;},toggleClass:function(s,t){k.toggleClass(this.dom(),s,t);return this;},scrollTop:i.newDelegateProp('dom','scrollTop'),scrollLeft:i.newDelegateProp('dom','scrollLeft'),scroll:function(s,t){s&&this.scrollLeft(this.scrollLeft()+s);t&&this.scrollTop(this.scrollTop()+t);},title:i.newDelegateProp('dom','title'),style:function(s){if(s===undefined)return this.dom().style;this.dom().style.cssText=p(s);return this;},addStyle:function(s){this.dom().style.cssText+=';'+p(s);return this;},textSelectable:i.newProp('textSelectable',function(s){this._textSelectable=s;if(!s)r();this.toggleClass('uki-textSelectable_off',!s);this[s?'removeListener':'addListener']('selectstart',l.preventDefaultHandler);}),domForEvent:function(s){return this.dom();},addListener:function(s,t){if(typeof s==='object'){h.forEach(s,function(v,w){this.addListener(w,v);},this);}else{var u=typeof t==='string'?q.controllerCallback(t):i.bindOnce(t,this);this._eventNames||(this._eventNames={});h.forEach(s.split(' '),function(v){this._eventNames[v]=true;l.addListener(this.domForEvent(v),v,u);},this);}return this;},removeListener:function(s,t){var u=t&&i.bindOnce(t,this);s||(s=h.keys(this._eventNames||{}).join(' '));h.forEach(s.split(' '),function(v){l.removeListener(this.domForEvent(v),v,u);},this);return this;},trigger:function(s){var t=this.domForEvent(s.type),u=l.createEvent(s,{_targetView:this});return l.trigger(t,u);},parent:function(s){if(s===undefined)return this._parent;this._parent=s;return this;},prevView:function(){if(!this.parent())return null;return this.parent().childViews()[this._viewIndex-1]||null;},nextView:function(){if(!this.parent())return null;return this.parent().childViews()[this._viewIndex+1]||null;},childViews:function(){return [];},pos:function(s){if(s===undefined)return this._styleToPos(this.dom().style);s=this._expandPos(s);this.addStyle(s);return this;},_styleToPos:function(s){var t={};h.forEach(n,function(u){if(s[u])t[u]=s[u];});return t;},_expandPos:function(s){if(typeof s==='string'){var t=s;s={};h.forEach(t.split(/\s+/),function(u){var v=u.split(':');s[v[0]]=v[1];});}h.forEach(o,function(u,v){if(s[v])s[u]=s[v];});s.position='absolute';return s;},clientRect:function(s){return k.clientRect(this.dom(),s);},bindingOptions:i.newProp('bindingOptions'),bindings:i.newProp('bindings',function(s){s=s||[];h.invoke(this.bindings()||[],'destruct');this._bindings=h.map(s,this._createBinding,this);}),_createBinding:function(s){s=h.extend(this.bindingOptions(),s);s.view=this;return new m(s);},binding:function(s){if(s==='undefined')return this.bindings()[0];return this.bindings(s&&[s]);}});function r(){r=i.FT;k.createStylesheet(".uki-textSelectable_off{-moz-user-select:-moz-none;-webkit-user-select:none;-o-user-select:none;user-select:none;}\n.uki-textSelectable_off::selection{background: transparent;}");}q.prototype.on=q.prototype.addListener;f.Base=q;});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-view-container
* @option preserve-header
*/__d("uki-view-container",["uki-view","uki-utils","uki-function","uki-dom","uki-view-base","uki-builder"],function(a,b,c,d,e,f){var g=b("uki-view"),h=b("uki-utils"),i=b("uki-function"),j=b("uki-dom"),k=b("uki-view-base").Base,l=g.newClass('Container',k,{_setup:function(m){this._childViews=[];},destruct:function(){h.invoke(this.childViews(),'destruct');k.prototype.destruct.call(this);},_layout:function(){h.invoke(this.childViews(),'layout');return this;},childViews:function(m,n){if(m===undefined)return this._childViews;h.forEach(this.childViews(),function(o){this.removeChild(o);if(n!==false)o.destruct();},this);b("uki-builder").build(m).forEach(function(o){this.appendChild(o);},this);return this;},firstChild:function(){return this.childViews()[0];},lastChild:function(){return this.childViews()[this.childViews().length-1];},removeChild:function(m){m.parent(null);var n=m._viewIndex,o,p;for(o=n+1,p=this._childViews.length;o<p;o++)this._childViews[o]._viewIndex--;this._childViews=h.without(this._childViews,m);this._removeChildFromDom(m);this._childrenChanged();return this;},_removeChildFromDom:function(m){j.removeElement(m.dom());},appendChild:function(m){m._viewIndex=this._childViews.length;this._childViews.push(m);m.parent(this);this._appendChildToDom(m);this._childrenChanged();return this;},_appendChildToDom:function(m){this.dom().appendChild(m.dom());},insertBefore:function(m,n){var o=n._viewIndex,p=this._childViews.length;m._viewIndex=n._viewIndex;for(;o<p;o++)this._childViews[o]._viewIndex++;this._childViews.splice(n._viewIndex-1,0,m);m.parent(this);this._insertBeforeInDom(m,n);this._childrenChanged();return this;},_insertBeforeInDom:function(m,n){this.dom().insertBefore(m.dom(),n.dom());},_childrenChanged:function(){},domForChild:function(m){return this.dom();}});f.Container=l;});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-attaching
* @option preserve-header
*/__d("uki-attaching",["uki-utils","uki-env","uki-event","uki-dom","uki-function","uki-view-container"],function(a,b,c,d,e,f){var g=b("uki-utils"),h=b("uki-env"),i=b("uki-event"),j=b("uki-dom"),k=b("uki-function"),l=b("uki-view-container").Container,m=k.newClass(l,{typeName:'Attaching',_setup:function(p){this._dom=p.dom;j.addClass(this.dom(),'uki-attaching');l.prototype._setup.call(this,p);},_createDom:k.FS,parent:function(){return null;}}),n=null;m.attach=function(p,q){p=p||h.doc.body;var r=p[h.expando]=p[h.expando]||h.guid++;if(!n||!n[r])o(new m({dom:p}));return n[r].appendChild(q);};m.instances=function(){var p=[];g.forEach(n||{},function(q){p.push(q);});return p;};function o(p){if(!n){n={};var q=false;i.on(h.root,'resize',function(){if(!q){q=true;k.defer(function(t,u){q=false;g.forEach(n,function(v){v.layout();});});}});}var r=p.dom(),s=r[h.expando]=r[h.expando]||h.guid++;return (n[s]=p);}f.Attaching=m;});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-selector
* @option preserve-header
*/__d("uki-selector",["uki-utils","uki-collection","uki-view","uki-attaching"],function(a,b,c,d,e,f){var g=b("uki-utils"),h=b("uki-collection").Collection,i=/^#((?:[\w\u00c0-\uFFFF_-]|\\.)+)$/,j=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,k=[{name:'ID',regexp:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/},{name:'INST',regexp:/\[\s*instanceof\s+((?:[\w\u00c0-\uFFFF_.-]|\\.)+)\s*\]/},{name:'PROP',regexp:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/},{name:'TYPE',regexp:/^((?:[\w\u00c0-\uFFFF\*_\.-]|\\.)+)/},{name:'POS',regexp:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/}],l=k.POS,m={first:function(s){return s===0;},last:function(s,t,u){return s===u.length-1;},even:function(s){return s%2===0;},odd:function(s){return s%2===1;},lt:function(s,t){return s<t[2]-0;},gt:function(s,t){return s>t[2]-0;},nth:function(s,t){return t[2]-0==s;},eq:function(s,t){return t[2]-0==s;}},n={TYPE:function(s,t){var u=t[1];if(u=='*')return true;var v=g.prop(s,'typeName');return v&&v.length>=u.length&&('.'+v).indexOf('.'+u)==(v.length-u.length);},INST:function(s,t){var u=g.path2obj(t[1]);return u&&(s instanceof u);},PROP:function(s,t){var u=g.prop(s,t[1]),v=u+'',w=t[2],x=t[4];return u==null?w==="!=":w==="="?v===x:w==="*="?v.indexOf(x)>=0:w==="~="?(" "+v+" ").indexOf(x)>=0:!x?v&&u!==false:w==="!="?v!=x:w==="^="?v.indexOf(x)===0:w==="$="?v.substr(v.length-x.length)===x:false;},ID:function(s,t){return n.PROP(s,['','id','=','',t[1]]);},POS:function(s,t,u,v){var w=m[t[1]];return w?w(u,t,v):false;}},o={"+":function(s){return g.unique(g.pluck(s,'nextView'));},">":function(s){return g.unique(q(g.pluck(s,'childViews')));},"":function(s){return g.unique(p(q(g.pluck(s,'childViews'))));},"~":function(s){return g.unique(q(g.map(s,function(t){return t.parent().childViews().slice((t._viewIndex||0)+1);})));}};function p(s){return q(g.map(s,function(t){var u=g.prop(t,'childViews');return u?[t].concat(p(u)):[];}));}function q(s){return g.reduce(s,function(t,u){return t.concat(u);},[]);}var r={find:function(s,t,u){var v;if(!t&&(v=s.match(i))){var w=b("uki-view").byId(v[1]);return new h(w?[w]:[]);}t=t||b("uki-attaching").Attaching.instances();if(t.length===undefined)t=[t];var x=r.tokenize(s),y=x[0],z=x[1],aa=t,ba;while(y.length>0){ba=o[y[0]]?o[y.shift()]:o[''];aa=ba(aa);if(y.length===0)break;aa=r.reduce(y.shift(),aa);}if(z)aa=aa.concat(r.find(z,t,true));return u?aa:new h(g.unique(aa));},reduce:function(s,t){if(!t||!t.length)return [];var u,v;while(s){v=false;g.forEach(k,function(w,x){if(!v&&(u=s.match(w.regexp))){v=true;t=g.filter(t,function(y,z){return n[w.name](y,u,z,t);});s=s.replace(w.regexp,'');return false;}});if(!v)break;}return t;},tokenize:function(s){var t=[],u,v;j.lastIndex=0;while((u=j.exec(s))!==null){t.push(u[1]);if(u[2]){v=RegExp.rightContext;break;}}return [t,v];}};f.find=r.find;});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-collection
* @option preserve-header
*/__d("uki-collection",["uki-function","uki-utils","uki-selector","uki-builder","uki-attaching"],function(a,b,c,d,e,f){var g=b("uki-function"),h=b("uki-utils"),i=Array.prototype,j=g.newClass({init:function(l,m){this.length=0;this._references=m||{};i.push.apply(this,l);},view:function(l){return this._references[l];},forEach:function(l,m){return h.forEach(this,l,m);},filter:function(l,m){return new j(h.filter(this,l,m));},map:function(l,m){return h.map(this,l,m);},prop:function(l,m){if(m!==undefined){for(var n=this.length-1;n>=0;n--)h.prop(this[n],l,m);return this;}else return this[0]?h.prop(this[0],l):"";},find:function(l){return b("uki-selector").find(l,this);},appendTo:function(l){l=b("uki-builder").build(l)[0];this.forEach(function(m){l.appendChild(m);});return this;},attach:function(l){this.forEach(function(m){b("uki-attaching").Attaching.attach(l,m);m.layout();});return this;},remove:function(){this.forEach(function(l){if(l.parent())l.parent().removeChild(l);});}}),k=j.prototype;h.forEach([['parent','parent'],['next','nextView'],['prev','prevView']],function(l,m){k[l[0]]=function(){return new j(h.unique(h.filter(h.pluck(this,l[1]),function(n){return !!n;})));};});j.addMethods=function(l){h.forEach(l,function(m){if(!k[m])k[m]=function(){for(var n=this.length-1;n>=0;n--)this[n][m].apply(this[n],arguments);return this;};});return this;};j.addProps=function(l){h.forEach(l,function(m){if(!k[m])k[m]=function(n){return this.prop(m,n);};});return this;};j.addMethods(['addListener','removeListener','trigger','on','addClass','removeClass','toggleClass','destruct','layout','scroll','clear']);j.addProps(['id','dom','text','html','pos','visible','style','model','bindings','clientRect']);f.Collection=j;});
/**
* Copyright (c) 2011, Vladimir Kolesnikov, Facebook, Inc.
* Copyright (c) 2011, Facebook, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
*   * Redistributions of source code must retain the above copyright notice,
*     this list of conditions and the following disclaimer.
*   * Redistributions in binary form must reproduce the above copyright notice,
*     this list of conditions and the following disclaimer in the documentation
*     and/or other materials provided with the distribution.
*   * Neither the name Facebook nor the names of its contributors may be used to
*     endorse or promote products derived from this software without specific
*     prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* This file was automatically generated from uki source by Facebook.
* @providesModule uki-builder
* @option preserve-header
*/__d("uki-builder",["uki-utils","uki-function","uki-collection"],function(a,b,c,d,e,f){var g=b("uki-utils"),h=b("uki-function"),i=b("uki-collection").Collection,j=h.newClass({init:function(p){this.namespaces=p||[a];this.build=h.bind(this.build,this);this._stack=0;},build:function(p){if(!this._stack++)this._references={};var q=o(this,function(){if(p.length===undefined)p=[p];return new i(g.map(p,function(r){return this.buildOne(r);},this),this._references);},this);if(!this._stack--)this._references=null;return q;},buildOne:function(p){if(p.typeName)return p;var q=p.view,r=p.init||{},s;if(typeof q==='string')q=this.resolvePath(q);if(!q){throw "builder: Can't find view with type '"+p.view+"'";}else s=new q(r);if(p.as)this._references[p.as]=s;k(s,p);return s;},resolvePath:function(p){for(var q=0,r=this.namespaces,s=r.length,t;q<s;q++){t=g.path2obj(p,r[q]);if(t)return t;}return false;}});function k(p,q){g.forEach(q,function(r,s){if(s==='view'||s==='init'||s==='as')return;g.prop(p,s,r);});return p;}var l;function m(p){f.build=p.build;f.namespaces=p.namespaces;l=p;}function n(){return l;}function o(p,q,r){var s=l;m(p);var t=q.call(r||a);m(s);return t;}f.setDefault=m;f.getDefault=n;f.Builder=j;f.withBuilder=o;m(new j());});
/**
 * @providesModule ExCanvas
 * @option preserve-header
 *
 * Copyright 2006 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */__d("ExCanvas",[],function(a,b,c,d,e,f){var g={};if(!document.createElement('canvas').getContext){var i=Math,j=i.round,k=i.sin,m=i.cos,n=i.abs,o=i.sqrt,p=10,q=p/2;function r(){return this.context_||(this.context_=new sa(this));}var t=Array.prototype.slice;function u(h,l,s){var fb=t.call(arguments,2);return function(){return h.apply(l,fb.concat(t.call(arguments)));};}function v(h){return String(h).replace(/&/g,"&amp;").replace(/"/g,"&quot;");}function w(h){if(!h.namespaces.g_vml_)h.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");if(!h.namespaces.g_o_)h.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!h.styleSheets.ex_canvas_){var l=h.createStyleSheet();l.owningElement.id="ex_canvas_";l.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}";}}w(document);var x={init:function(h){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var l=h||document;l.createElement("canvas");l.attachEvent("onreadystatechange",u(this.init_,this,l));}},init_:function(h){var l=h.getElementsByTagName("canvas");for(var s=0;s<l.length;s++)this.initElement(l[s]);},initElement:function(h){if(!h.getContext){h.getContext=r;w(h.ownerDocument);h.innerHTML="";h.attachEvent("onpropertychange",y);h.attachEvent("onresize",z);var l=h.attributes;if(l.width&&l.width.specified){h.style.width=l.width.nodeValue+"px";}else h.width=h.clientWidth;if(l.height&&l.height.specified){h.style.height=l.height.nodeValue+"px";}else h.height=h.clientHeight;}return h;}};function y(h){var l=h.srcElement;switch(h.propertyName){case "width":l.getContext().clearRect();l.style.width=l.attributes.width.nodeValue+"px";l.firstChild.style.width=l.clientWidth+"px";break;case "height":l.getContext().clearRect();l.style.height=l.attributes.height.nodeValue+"px";l.firstChild.style.height=l.clientHeight+"px";break;}}function z(h){var l=h.srcElement;if(l.firstChild){l.firstChild.style.width=l.clientWidth+"px";l.firstChild.style.height=l.clientHeight+"px";}}x.init();var aa=[];for(var ba=0;ba<16;ba++)for(var ca=0;ca<16;ca++)aa[ba*16+ca]=ba.toString(16)+ca.toString(16);function da(){return [[1,0,0],[0,1,0],[0,0,1]];}function ea(h,l){var s=da();for(var fb=0;fb<3;fb++)for(var gb=0;gb<3;gb++){var hb=0;for(var ib=0;ib<3;ib++)hb+=h[fb][ib]*l[ib][gb];s[fb][gb]=hb;}return s;}function fa(h,l){l.fillStyle=h.fillStyle;l.lineCap=h.lineCap;l.lineJoin=h.lineJoin;l.lineWidth=h.lineWidth;l.miterLimit=h.miterLimit;l.shadowBlur=h.shadowBlur;l.shadowColor=h.shadowColor;l.shadowOffsetX=h.shadowOffsetX;l.shadowOffsetY=h.shadowOffsetY;l.strokeStyle=h.strokeStyle;l.globalAlpha=h.globalAlpha;l.font=h.font;l.textAlign=h.textAlign;l.textBaseline=h.textBaseline;l.arcScaleX_=h.arcScaleX_;l.arcScaleY_=h.arcScaleY_;l.lineScale_=h.lineScale_;}function ga(h){var l=h.indexOf("(",3),s=h.indexOf(")",l+1),fb=h.substring(l+1,s).split(",");if(fb.length==4&&h.substr(3,1)=="a"){alpha=Number(fb[3]);}else fb[3]=1;return fb;}function ha(h){return parseFloat(h)/100;}function ia(h,l,s){return Math.min(s,Math.max(l,h));}function ja(fb){var gb,hb,ib;h=parseFloat(fb[0])/360%360;if(h<0)h++;s=ia(ha(fb[1]),0,1);l=ia(ha(fb[2]),0,1);if(s==0){gb=hb=ib=l;}else{var jb=l<.5?l*(1+s):l+s-l*s,kb=2*l-jb;gb=ka(kb,jb,h+1/3);hb=ka(kb,jb,h);ib=ka(kb,jb,h-1/3);}return "#"+aa[Math.floor(gb*255)]+aa[Math.floor(hb*255)]+aa[Math.floor(ib*255)];}function ka(h,l,s){if(s<0)s++;if(s>1)s--;if(6*s<1){return h+(l-h)*6*s;}else if(2*s<1){return l;}else if(3*s<2){return h+(l-h)*(2/3-s)*6;}else return h;}function la(h){var l,s=1;h=String(h);if(h.charAt(0)=="#"){l=h;}else if(/^rgb/.test(h)){var fb=ga(h),l="#",gb;for(var hb=0;hb<3;hb++){if(fb[hb].indexOf("%")!=-1){gb=Math.floor(ha(fb[hb])*255);}else gb=Number(fb[hb]);l+=aa[ia(gb,0,255)];}s=fb[3];}else if(/^hsl/.test(h)){var fb=ga(h);l=ja(fb);s=fb[3];}else l=h;return {color:l,alpha:s};}var ma={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"},na={};function oa(h){if(na[h])return na[h];var l=document.createElement("div"),s=l.style;try{s.font=h;}catch(fb){}return na[h]={style:s.fontStyle||ma.style,variant:s.fontVariant||ma.variant,weight:s.fontWeight||ma.weight,size:s.fontSize||ma.size,family:s.fontFamily||ma.family};}function pa(h,l){var s={};for(var fb in h)s[fb]=h[fb];var gb=parseFloat(l.currentStyle.fontSize),hb=parseFloat(h.size);if(typeof h.size=="number"){s.size=h.size;}else if(h.size.indexOf("px")!=-1){s.size=hb;}else if(h.size.indexOf("em")!=-1){s.size=gb*hb;}else if(h.size.indexOf("%")!=-1){s.size=(gb/100)*hb;}else if(h.size.indexOf("pt")!=-1){s.size=hb/.75;}else s.size=gb;s.size*=.981;return s;}function qa(h){return h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;}function ra(h){switch(h){case "butt":return "flat";case "round":return "round";case "square":default:return "square";}}function sa(h){this.m_=da();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=p*1;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=h;var l=h.ownerDocument.createElement("div");l.style.width=h.clientWidth+"px";l.style.height=h.clientHeight+"px";l.style.overflow="hidden";l.style.position="absolute";h.appendChild(l);this.element_=l;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1;}var ta=sa.prototype;ta.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);this.textMeasureEl_=null;}this.element_.innerHTML="";};ta.beginPath=function(){this.currentPath_=[];};ta.moveTo=function(h,l){var s=this.getCoords_(h,l);this.currentPath_.push({type:"moveTo",x:s.x,y:s.y});this.currentX_=s.x;this.currentY_=s.y;};ta.lineTo=function(h,l){var s=this.getCoords_(h,l);this.currentPath_.push({type:"lineTo",x:s.x,y:s.y});this.currentX_=s.x;this.currentY_=s.y;};ta.bezierCurveTo=function(h,l,s,fb,gb,hb){var ib=this.getCoords_(gb,hb),jb=this.getCoords_(h,l),kb=this.getCoords_(s,fb);ua(this,jb,kb,ib);};function ua(h,l,s,fb){h.currentPath_.push({type:"bezierCurveTo",cp1x:l.x,cp1y:l.y,cp2x:s.x,cp2y:s.y,x:fb.x,y:fb.y});h.currentX_=fb.x;h.currentY_=fb.y;}ta.quadraticCurveTo=function(h,l,s,fb){var gb=this.getCoords_(h,l),hb=this.getCoords_(s,fb),ib={x:this.currentX_+2/3*(gb.x-this.currentX_),y:this.currentY_+2/3*(gb.y-this.currentY_)},jb={x:ib.x+(hb.x-this.currentX_)/3,y:ib.y+(hb.y-this.currentY_)/3};ua(this,ib,jb,hb);};ta.arc=function(h,l,s,fb,gb,hb){s*=p;var ib=hb?"at":"wa",jb=h+m(fb)*s-q,kb=l+k(fb)*s-q,lb=h+m(gb)*s-q,mb=l+k(gb)*s-q;if(jb==lb&&!hb)jb+=.125;var nb=this.getCoords_(h,l),ob=this.getCoords_(jb,kb),pb=this.getCoords_(lb,mb);this.currentPath_.push({type:ib,x:nb.x,y:nb.y,radius:s,xStart:ob.x,yStart:ob.y,xEnd:pb.x,yEnd:pb.y});};ta.rect=function(h,l,s,fb){this.moveTo(h,l);this.lineTo(h+s,l);this.lineTo(h+s,l+fb);this.lineTo(h,l+fb);this.closePath();};ta.strokeRect=function(h,l,s,fb){var gb=this.currentPath_;this.beginPath();this.moveTo(h,l);this.lineTo(h+s,l);this.lineTo(h+s,l+fb);this.lineTo(h,l+fb);this.closePath();this.stroke();this.currentPath_=gb;};ta.fillRect=function(h,l,s,fb){var gb=this.currentPath_;this.beginPath();this.moveTo(h,l);this.lineTo(h+s,l);this.lineTo(h+s,l+fb);this.lineTo(h,l+fb);this.closePath();this.fill();this.currentPath_=gb;};ta.createLinearGradient=function(h,l,s,fb){var gb=new za("gradient");gb.x0_=h;gb.y0_=l;gb.x1_=s;gb.y1_=fb;return gb;};ta.createRadialGradient=function(h,l,s,fb,gb,hb){var ib=new za("gradientradial");ib.x0_=h;ib.y0_=l;ib.r0_=s;ib.x1_=fb;ib.y1_=gb;ib.r1_=hb;return ib;};ta.drawImage=function(h,l){var s,fb,gb,hb,ib,jb,kb,lb,mb=h.runtimeStyle.width,nb=h.runtimeStyle.height;h.runtimeStyle.width="auto";h.runtimeStyle.height="auto";var ob=h.width,pb=h.height;h.runtimeStyle.width=mb;h.runtimeStyle.height=nb;if(arguments.length==3){s=arguments[1];fb=arguments[2];ib=jb=0;kb=gb=ob;lb=hb=pb;}else if(arguments.length==5){s=arguments[1];fb=arguments[2];gb=arguments[3];hb=arguments[4];ib=jb=0;kb=ob;lb=pb;}else if(arguments.length==9){ib=arguments[1];jb=arguments[2];kb=arguments[3];lb=arguments[4];s=arguments[5];fb=arguments[6];gb=arguments[7];hb=arguments[8];}else throw Error("Invalid number of arguments");var qb=this.getCoords_(s,fb),rb=kb/2,sb=lb/2,tb=[],ub=10,vb=10;tb.push(" <g_vml_:group",' coordsize="',p*ub,",",p*vb,'"',' coordorigin="0,0"',' style="width:',ub,"px;height:",vb,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var wb=[];wb.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",j(qb.x/p),",","Dy=",j(qb.y/p),"");var xb=qb,yb=this.getCoords_(s+gb,fb),zb=this.getCoords_(s,fb+hb),ac=this.getCoords_(s+gb,fb+hb);xb.x=i.max(xb.x,yb.x,zb.x,ac.x);xb.y=i.max(xb.y,yb.y,zb.y,ac.y);tb.push("padding:0 ",j(xb.x/p),"px ",j(xb.y/p),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",wb.join(""),", sizingmethod='clip');");}else tb.push("top:",j(qb.y/p),"px;left:",j(qb.x/p),"px;");tb.push(' ">','<g_vml_:image src="',h.src,'"',' style="width:',p*gb,"px;"," height:",p*hb,'px"',' cropleft="',ib/ob,'"',' croptop="',jb/pb,'"',' cropright="',(ob-ib-kb)/ob,'"',' cropbottom="',(pb-jb-lb)/pb,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",tb.join(""));};ta.stroke=function(h){var l=10,s=10,fb=5000,gb={x:null,y:null},hb={x:null,y:null};for(var ib=0;ib<this.currentPath_.length;ib+=fb){var jb=[],kb=false;jb.push("<g_vml_:shape",' filled="',!!h,'"',' style="position:absolute;width:',l,"px;height:",s,'px;"',' coordorigin="0,0"',' coordsize="',p*l,",",p*s,'"',' stroked="',!h,'"',' path="');var lb=false;for(var mb=ib;mb<Math.min(ib+fb,this.currentPath_.length);mb++){if(mb%fb==0&&mb>0)jb.push(" m ",j(this.currentPath_[mb-1].x),",",j(this.currentPath_[mb-1].y));var nb=this.currentPath_[mb],ob;switch(nb.type){case "moveTo":ob=nb;jb.push(" m ",j(nb.x),",",j(nb.y));break;case "lineTo":jb.push(" l ",j(nb.x),",",j(nb.y));break;case "close":jb.push(" x ");nb=null;break;case "bezierCurveTo":jb.push(" c ",j(nb.cp1x),",",j(nb.cp1y),",",j(nb.cp2x),",",j(nb.cp2y),",",j(nb.x),",",j(nb.y));break;case "at":case "wa":jb.push(" ",nb.type," ",j(nb.x-this.arcScaleX_*nb.radius),",",j(nb.y-this.arcScaleY_*nb.radius)," ",j(nb.x+this.arcScaleX_*nb.radius),",",j(nb.y+this.arcScaleY_*nb.radius)," ",j(nb.xStart),",",j(nb.yStart)," ",j(nb.xEnd),",",j(nb.yEnd));break;}if(nb){if(gb.x==null||nb.x<gb.x)gb.x=nb.x;if(hb.x==null||nb.x>hb.x)hb.x=nb.x;if(gb.y==null||nb.y<gb.y)gb.y=nb.y;if(hb.y==null||nb.y>hb.y)hb.y=nb.y;}}jb.push(' ">');if(!h){va(this,jb);}else wa(this,jb,gb,hb);jb.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",jb.join(""));}};function va(h,l){var s=la(h.strokeStyle),fb=s.color,gb=s.alpha*h.globalAlpha,hb=h.lineScale_*h.lineWidth;if(hb<1)gb*=hb;l.push("<g_vml_:stroke",' opacity="',gb,'"',' joinstyle="',h.lineJoin,'"',' miterlimit="',h.miterLimit,'"',' endcap="',ra(h.lineCap),'"',' weight="',hb,'px"',' color="',fb,'" />');}function wa(h,l,s,fb){var gb=h.fillStyle,hb=h.arcScaleX_,ib=h.arcScaleY_,jb=fb.x-s.x,kb=fb.y-s.y;if(gb instanceof za){var lb=0,mb={x:0,y:0},nb=0,ob=1;if(gb.type_=="gradient"){var pb=gb.x0_/hb,qb=gb.y0_/ib,rb=gb.x1_/hb,sb=gb.y1_/ib,tb=h.getCoords_(pb,qb),ub=h.getCoords_(rb,sb),vb=ub.x-tb.x,wb=ub.y-tb.y;lb=Math.atan2(vb,wb)*180/Math.PI;if(lb<0)lb+=360;if(lb<1e-06)lb=0;}else{var tb=h.getCoords_(gb.x0_,gb.y0_);mb={x:(tb.x-s.x)/jb,y:(tb.y-s.y)/kb};jb/=hb*p;kb/=ib*p;var xb=i.max(jb,kb);nb=2*gb.r0_/xb;ob=2*gb.r1_/xb-nb;}var yb=gb.colors_;yb.sort(function(mc,nc){return mc.offset-nc.offset;});var zb=yb.length,ac=yb[0].color,bc=yb[zb-1].color,cc=yb[0].alpha*h.globalAlpha,dc=yb[zb-1].alpha*h.globalAlpha,ec=[];for(var fc=0;fc<zb;fc++){var gc=yb[fc];ec.push(gc.offset*ob+nb+" "+gc.color);}l.push('<g_vml_:fill type="',gb.type_,'"',' method="none" focus="100%"',' color="',ac,'"',' color2="',bc,'"',' colors="',ec.join(","),'"',' opacity="',dc,'"',' g_o_:opacity2="',cc,'"',' angle="',lb,'"',' focusposition="',mb.x,",",mb.y,'" />');}else if(gb instanceof ab){if(jb&&kb){var hc=-s.x,ic=-s.y;l.push("<g_vml_:fill",' position="',hc/jb*hb*hb,",",ic/kb*ib*ib,'"',' type="tile"',' src="',gb.src_,'" />');}}else{var jc=la(h.fillStyle),kc=jc.color,lc=jc.alpha*h.globalAlpha;l.push('<g_vml_:fill color="',kc,'" opacity="',lc,'" />');}}ta.fill=function(){this.stroke(true);};ta.closePath=function(){this.currentPath_.push({type:"close"});};ta.getCoords_=function(h,l){var s=this.m_;return {x:p*(h*s[0][0]+l*s[1][0]+s[2][0])-q,y:p*(h*s[0][1]+l*s[1][1]+s[2][1])-q};};ta.save=function(){var h={};fa(this,h);this.aStack_.push(h);this.mStack_.push(this.m_);this.m_=ea(da(),this.m_);};ta.restore=function(){if(this.aStack_.length){fa(this.aStack_.pop(),this);this.m_=this.mStack_.pop();}};function xa(h){return isFinite(h[0][0])&&isFinite(h[0][1])&&isFinite(h[1][0])&&isFinite(h[1][1])&&isFinite(h[2][0])&&isFinite(h[2][1]);}function ya(h,l,s){if(!xa(l))return;h.m_=l;if(s){var fb=l[0][0]*l[1][1]-l[0][1]*l[1][0];h.lineScale_=o(n(fb));}}ta.translate=function(h,l){var s=[[1,0,0],[0,1,0],[h,l,1]];ya(this,ea(s,this.m_),false);};ta.rotate=function(h){var l=m(h),s=k(h),fb=[[l,s,0],[-s,l,0],[0,0,1]];ya(this,ea(fb,this.m_),false);};ta.scale=function(h,l){this.arcScaleX_*=h;this.arcScaleY_*=l;var s=[[h,0,0],[0,l,0],[0,0,1]];ya(this,ea(s,this.m_),true);};ta.transform=function(h,l,s,fb,gb,hb){var ib=[[h,l,0],[s,fb,0],[gb,hb,1]];ya(this,ea(ib,this.m_),true);};ta.setTransform=function(h,l,s,fb,gb,hb){var ib=[[h,l,0],[s,fb,0],[gb,hb,1]];ya(this,ib,true);};ta.drawText_=function(h,l,s,fb,gb){var hb=this.m_,ib=1000,jb=0,kb=ib,lb={x:0,y:0},mb=[],nb=pa(oa(this.font),this.element_),ob=qa(nb),pb=this.element_.currentStyle,qb=this.textAlign.toLowerCase();switch(qb){case "left":case "center":case "right":break;case "end":qb=pb.direction=="ltr"?"right":"left";break;case "start":qb=pb.direction=="rtl"?"right":"left";break;default:qb="left";}switch(this.textBaseline){case "hanging":case "top":lb.y=nb.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":lb.y=-nb.size/2.25;break;}switch(qb){case "right":jb=ib;kb=.05;break;case "center":jb=kb=ib/2;break;}var rb=this.getCoords_(l+lb.x,s+lb.y);mb.push('<g_vml_:line from="',-jb,' 0" to="',kb,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!gb,'" stroked="',!!gb,'" style="position:absolute;width:1px;height:1px;">');if(gb){va(this,mb);}else wa(this,mb,{x:-jb,y:0},{x:kb,y:nb.size});var sb=hb[0][0].toFixed(3)+","+hb[1][0].toFixed(3)+","+hb[0][1].toFixed(3)+","+hb[1][1].toFixed(3)+",0,0",tb=j(rb.x/p)+","+j(rb.y/p);mb.push('<g_vml_:skew on="t" matrix="',sb,'" ',' offset="',tb,'" origin="',jb,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',v(h),'" style="v-text-align:',qb,";font:",v(ob),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",mb.join(""));};ta.fillText=function(h,l,s,fb){this.drawText_(h,l,s,fb,false);};ta.strokeText=function(h,l,s,fb){this.drawText_(h,l,s,fb,true);};ta.measureText=function(h){if(!this.textMeasureEl_){var l='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",l);this.textMeasureEl_=this.element_.lastChild;}var s=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(s.createTextNode(h));return {width:this.textMeasureEl_.offsetWidth};};ta.clip=function(){};ta.arcTo=function(){};ta.createPattern=function(h,l){return new ab(h,l);};function za(h){this.type_=h;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[];}za.prototype.addColorStop=function(h,l){l=la(l);this.colors_.push({offset:h,color:l.color,alpha:l.alpha});};function ab(h,l){cb(h);switch(l){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=l;break;default:bb("SYNTAX_ERR");}this.src_=h.src;this.width_=h.width;this.height_=h.height;}function bb(h){throw new db(h);}function cb(h){if(!h||h.nodeType!=1||h.tagName!="IMG")bb("TYPE_MISMATCH_ERR");if(h.readyState!="complete")bb("INVALID_STATE_ERR");}function db(h){this.code=this[h];this.message=h+": DOM Exception "+this.code;}var eb=db.prototype=new Error();eb.INDEX_SIZE_ERR=1;eb.DOMSTRING_SIZE_ERR=2;eb.HIERARCHY_REQUEST_ERR=3;eb.WRONG_DOCUMENT_ERR=4;eb.INVALID_CHARACTER_ERR=5;eb.NO_DATA_ALLOWED_ERR=6;eb.NO_MODIFICATION_ALLOWED_ERR=7;eb.NOT_FOUND_ERR=8;eb.NOT_SUPPORTED_ERR=9;eb.INUSE_ATTRIBUTE_ERR=10;eb.INVALID_STATE_ERR=11;eb.SYNTAX_ERR=12;eb.INVALID_MODIFICATION_ERR=13;eb.NAMESPACE_ERR=14;eb.INVALID_ACCESS_ERR=15;eb.VALIDATION_ERR=16;eb.TYPE_MISMATCH_ERR=17;g={CanvasGradient:za,CanvasPattern:ab,CanvasRenderingContext2D:sa,DOMException:db,G_vmlCanvasManager:x};}e.exports=g;});
__d("uki-fb-view-image",["uki-function","uki-view","uki-dom","uki-view-base"],function(a,b,c,d,e,f){var g=b('uki-function'),h=b('uki-view'),i=b('uki-dom'),j=b('uki-view-base').Base,k=h.newClass('fb.Image',j,{_createDom:function(){this._dom=i.createElement('img',{className:'ufb-image'});}});g.delegateProp(k.prototype,['src','alt','title'],'_dom');f.Image=k;});
__d("insights-view-base-graph",["uki-function","uki-dom","uki-view","uki-builder","uki-utils","flot","DoNotUseJQuery17","insights-constants","uki-fb-view-image","uki-view-container"],function(a,b,c,d,e,f){var g=b('uki-function'),h=b('uki-dom'),i=b('uki-view'),j=b('uki-builder').build,k=b('uki-utils'),l=b('flot'),m=b('DoNotUseJQuery17'),n=b('insights-constants').InsightsConstants,o=b('uki-fb-view-image').Image,p=b('uki-view-container').Container,q=i.newClass('insights.BaseGraph',p,{_createDom:function(r){this._dom=h.createElement('div');var s=j({view:p,childViews:[{view:o,as:'loading',src:n.LOADING_IMAGE},{view:p,className:'graph-canvas',as:'canvas'}]});s.appendTo(this);this._loading=s.view('loading');this._canvas=s.view('canvas');this.loading(true);this.options({});this.legend([]);},loading:g.newDelegateProp('_loading','visible'),legendContainer:g.newProp('legendContainer'),noColumnsLegend:g.newProp('noColumnsLegend'),legendStyle:g.newProp('legendStyle'),maxPoints:g.newProp('maxPoints'),xMin:g.newProp('xMin'),colors:g.newProp('colors'),legend:g.newProp('legend'),series:g.newProp('series'),mixins:g.newProp('mixin',function(r){k.forEach(r,g.bind(function(s){k.extend(this.options(),s.options());},this));}),options:g.newProp('options'),_flotData:function(){var r=[];for(var s=0;s<this.series().length;s++)r.push({data:this.series()[s],label:this._chooseLabel(s),color:this._chooseColor(s)});return r;},_legendOptions:function(){return {legend:{container:this.legendContainer()?this.legendContainer().dom():null,style:this.legendStyle(),noColumns:this.noColumnsLegend()?this.noColumnsLegend():(this.legend()?this.legend().length:null)}};},_extendOptions:function(r){var s=this.options()||{};k.forEach(r,function(t,u){s[u]=s[u]||{};k.extend(s[u],t);});return this.options(s);},_flotOptions:function(){this._extendOptions(this._legendOptions());var r=this.options();if(r.points&&r.points.show&&this.series()&&this.maxPoints()&&this.series()[0].length>this.maxPoints())r.points.show=false;if(this.xMin()!=null){r.xaxis=r.xaxis||{};r.xaxis.min=this.xMin();}return r;},_chooseLabel:function(r){var s=this.legend();return s&&s.length>r?s[r]:null;},_chooseColor:function(r){var s=this.colors();return s&&s.length>r?s[r]:null;},plot:function(r){if(r!=null)this.series(r);l.plot(this._canvas.dom(),this._flotData(),this._flotOptions());this.trigger({type:n.Events.Plotted});}});f.BaseGraph=q;});
/**
 * @providesModule flot-pie
 * @option preserve-header
 *
 * Copyright (c) 2007-2009 IOLA and Ole Laursen
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Flot plugin for rendering pie charts. The plugin assumes the data is
 * coming is as a single data value for each series, and each of those
 * values is a positive value or zero (negative numbers don't make
 * any sense and will cause strange effects). The data values do
 * NOT need to be passed in as percentage values because it
 * internally calculates the total and percentages.
 *
 * * Created by Brian Medendorp, June 2009
 * * Updated November 2009 with contributions from: btburnett3, Anthony Aragues and Xavi Ivars
 *
 * * Changes:
 * 	2009-10-22: lineJoin set to round
 * 	2009-10-23: IE full circle fix, donut
 * 	2009-11-11: Added basic hover from btburnett3 - does not work in IE, and center is off in Chrome and Opera
 * 	2009-11-17: Added IE hover capability submitted by Anthony Aragues
 * 	2009-11-18: Added bug fix submitted by Xavi Ivars (issues with arrays when other JS libraries are included as well)
 *
 *
 * Available options are:
 * series: {
 * 	pie: {
 * 		show: true/false
 * 		radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
 * 		innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
 * 		startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
 * 		tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
 * 		offset: {
 * 			top: integer value to move the pie up or down
 * 			left: integer value to move the pie left or right, or 'auto'
 * 		},
 * 		stroke: {
 * 			color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
 * 			width: integer pixel width of the stroke
 * 		},
 * 		label: {
 * 			show: true/false, or 'auto'
 * 			formatter:  a user-defined function that modifies the text/style of the label text
 * 			radius: 0-1 for percentage of fullsize, or a specified pixel length
 * 			background: {
 * 				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
 * 				opacity: 0-1
 * 			},
 * 			threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
 * 		},
 * 		combine: {
 * 			threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
 * 			color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
 * 			label: any text value of what the combined slice should be labeled
 * 		}
 * 		highlight: {
 * 			opacity: 0-1
 * 		}
 * 	}
 * }
 *
 * More detail and specific examples can be found in the included HTML file.
 *
 */__d("flot-pie",["DoNotUseJQuery17","flot"],function(a,b,c,d,e,f){var g=b('DoNotUseJQuery17'),h=b('flot');(function(j){function k(m){var n=null,o=null,p=null,q=null,r=null,s=0,t=true,u=10,v=.95,w=0,z=false,aa=false,ba=[];m.hooks.processOptions.push(ca);m.hooks.bindEvents.push(da);function ca(i,x){if(x.series.pie.show){x.grid.show=false;if(x.series.pie.label.show=='auto')if(x.legend.show){x.series.pie.label.show=false;}else x.series.pie.label.show=true;if(x.series.pie.radius=='auto')if(x.series.pie.label.show){x.series.pie.radius=3/4;}else x.series.pie.radius=1;if(x.series.pie.tilt>1)x.series.pie.tilt=1;if(x.series.pie.tilt<0)x.series.pie.tilt=0;i.hooks.processDatapoints.push(ga);i.hooks.drawOverlay.push(ua);i.hooks.draw.push(ka);}}function da(i,x){var y=i.getOptions();if(y.series.pie.show&&y.grid.hoverable)x.unbind('mousemove').mousemove(oa);if(y.series.pie.show&&y.grid.clickable)x.unbind('click').click(pa);}function ea(i){var x='';function y(va,wa){if(!wa)wa=0;for(var xa=0;xa<va.length;++xa){for(var ya=0;ya<wa;ya++)x+='\t';if(typeof va[xa]=="object"){x+=''+xa+':\n';y(va[xa],wa+1);}else x+=''+xa+': '+va[xa]+'\n';}}y(i);alert(x);}function fa(i){for(var x=0;x<i.length;++x){var y=parseFloat(i[x].data[0][1]);if(y)s+=y;}}function ga(i,x,y,va){if(!z){z=true;n=i.getCanvas();o=j(n).parent();l=i.getOptions();i.setData(ja(i.getData()));}}function ha(){w=o.children().filter('.legend').children().width();p=Math.min(n.width,(n.height/l.series.pie.tilt))/2;r=(n.height/2)+l.series.pie.offset.top;q=(n.width/2);if(l.series.pie.offset.left=='auto'){if(l.legend.position.match('w')){q+=w/2;}else q-=w/2;}else q+=l.series.pie.offset.left;if(q<p){q=p;}else if(q>n.width-p)q=n.width-p;}function ia(i){for(var x=0;x<i.length;++x)if(typeof(i[x].data)=='number'){i[x].data=[[1,i[x].data]];}else if(typeof(i[x].data)=='undefined'||typeof(i[x].data[0])=='undefined'){if(typeof(i[x].data)!='undefined'&&typeof(i[x].data.label)!='undefined')i[x].label=i[x].data.label;i[x].data=[[1,0]];}return i;}function ja(i){i=ia(i);fa(i);var x=0,y=0,va=l.series.pie.combine.color,wa=[];for(var xa=0;xa<i.length;++xa){i[xa].data[0][1]=parseFloat(i[xa].data[0][1]);if(!i[xa].data[0][1])i[xa].data[0][1]=0;if(i[xa].data[0][1]/s<=l.series.pie.combine.threshold){x+=i[xa].data[0][1];y++;if(!va)va=i[xa].color;}else wa.push({data:[[1,i[xa].data[0][1]]],color:i[xa].color,label:i[xa].label,angle:(i[xa].data[0][1]*(Math.PI*2))/s,percent:(i[xa].data[0][1]/s*100)});}if(y>0)wa.push({data:[[1,x]],color:va,label:l.series.pie.combine.label,angle:(x*(Math.PI*2))/s,percent:(x/s*100)});return wa;}function ka(i,x){if(!o)return;ctx=x;ha();var y=i.getData(),va=0;while(t&&va<u){t=false;if(va>0)p*=v;va+=1;wa();if(l.series.pie.tilt<=.8)xa();ya();}if(va>=u){wa();o.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>');}if(i.setSeries&&i.insertLegend){i.setSeries(y);i.insertLegend();}function wa(){ctx.clearRect(0,0,n.width,n.height);o.children().filter('.pieLabel, .pieLabelBackground').remove();}function xa(){var za=5,ab=15,bb=10,cb=.02;if(l.series.pie.radius>1){var db=l.series.pie.radius;}else var db=p*l.series.pie.radius;if(db>=(n.width/2)-za||db*l.series.pie.tilt>=(n.height/2)-ab||db<=bb)return;ctx.save();ctx.translate(za,ab);ctx.globalAlpha=cb;ctx.fillStyle='#000';ctx.translate(q,r);ctx.scale(1,l.series.pie.tilt);for(var eb=1;eb<=bb;eb++){ctx.beginPath();ctx.arc(0,0,db,0,Math.PI*2,false);ctx.fill();db-=eb;}ctx.restore();}function ya(){startAngle=Math.PI*l.series.pie.startAngle;if(l.series.pie.radius>1){var za=l.series.pie.radius;}else var za=p*l.series.pie.radius;ctx.save();ctx.translate(q,r);ctx.scale(1,l.series.pie.tilt);ctx.save();var ab=startAngle;for(var bb=0;bb<y.length;++bb){y[bb].startAngle=ab;cb(y[bb].angle,y[bb].color,true);}ctx.restore();ctx.save();ctx.lineWidth=l.series.pie.stroke.width;ab=startAngle;for(var bb=0;bb<y.length;++bb)cb(y[bb].angle,l.series.pie.stroke.color,false);ctx.restore();la(ctx);if(l.series.pie.label.show)db();ctx.restore();function cb(eb,fb,gb){if(eb<=0)return;if(gb){ctx.fillStyle=fb;}else{ctx.strokeStyle=fb;ctx.lineJoin='round';}ctx.beginPath();if(Math.abs(eb-Math.PI*2)>1e-09){ctx.moveTo(0,0);}else if(j.browser.msie)eb-=.0001;ctx.arc(0,0,za,ab,ab+eb,false);ctx.closePath();ab+=eb;if(gb){ctx.fill();}else ctx.stroke();}function db(){var eb=startAngle;if(l.series.pie.label.radius>1){var fb=l.series.pie.label.radius;}else var fb=p*l.series.pie.label.radius;for(var gb=0;gb<y.length;++gb){if(y[gb].percent>=l.series.pie.label.threshold*100)hb(y[gb],eb,gb);eb+=y[gb].angle;}function hb(ib,jb,kb){if(ib.data[0][1]==0)return;var lb=l.legend.labelFormatter,mb,nb=l.series.pie.label.formatter;if(lb){mb=lb(ib.label,ib);}else mb=ib.label;if(nb)mb=nb(mb,ib);var ob=((jb+ib.angle)+jb)/2,pb=q+Math.round(Math.cos(ob)*fb),qb=r+Math.round(Math.sin(ob)*fb)*l.series.pie.tilt,rb='<span class="pieLabel" id="pieLabel'+kb+'" style="position:absolute;top:'+qb+'px;left:'+pb+'px;">'+mb+"</span>";o.append(rb);var sb=o.children('#pieLabel'+kb),tb=(qb-sb.height()/2),ub=(pb-sb.width()/2);sb.css('top',tb);sb.css('left',ub);if(0-tb>0||0-ub>0||n.height-(tb+sb.height())<0||n.width-(ub+sb.width())<0)t=true;if(l.series.pie.label.background.opacity!=0){var vb=l.series.pie.label.background.color;if(vb==null)vb=ib.color;var wb='top:'+tb+'px;left:'+ub+'px;';j('<div class="pieLabelBackground" style="position:absolute;width:'+sb.width()+'px;height:'+sb.height()+'px;'+wb+'background-color:'+vb+';"> </div>').insertBefore(sb).css('opacity',l.series.pie.label.background.opacity);}}}}}function la(i){if(l.series.pie.innerRadius>0){i.save();innerRadius=l.series.pie.innerRadius>1?l.series.pie.innerRadius:p*l.series.pie.innerRadius;i.globalCompositeOperation='destination-out';i.beginPath();i.fillStyle=l.series.pie.stroke.color;i.arc(0,0,innerRadius,0,Math.PI*2,false);i.fill();i.closePath();i.restore();i.save();i.beginPath();i.strokeStyle=l.series.pie.stroke.color;i.arc(0,0,innerRadius,0,Math.PI*2,false);i.stroke();i.closePath();i.restore();}}function ma(i,x){for(var y=false,va=-1,wa=i.length,xa=wa-1;++va<wa;xa=va)((i[va][1]<=x[1]&&x[1]<i[xa][1])||(i[xa][1]<=x[1]&&x[1]<i[va][1]))&&(x[0]<(i[xa][0]-i[va][0])*(x[1]-i[va][1])/(i[xa][1]-i[va][1])+i[va][0])&&(y=!y);return y;}function na(i,va){var wa=m.getData(),xa=m.getOptions(),ya=xa.series.pie.radius>1?xa.series.pie.radius:p*xa.series.pie.radius;for(var za=0;za<wa.length;++za){var ab=wa[za];if(ab.pie.show){ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,ya,ab.startAngle,ab.startAngle+ab.angle,false);ctx.closePath();x=i-q;y=va-r;if(ctx.isPointInPath){if(ctx.isPointInPath(i-q,va-r)){ctx.restore();return {datapoint:[ab.percent,ab.data],dataIndex:0,series:ab,seriesIndex:za};}}else{p1X=(ya*Math.cos(ab.startAngle));p1Y=(ya*Math.sin(ab.startAngle));p2X=(ya*Math.cos(ab.startAngle+(ab.angle/4)));p2Y=(ya*Math.sin(ab.startAngle+(ab.angle/4)));p3X=(ya*Math.cos(ab.startAngle+(ab.angle/2)));p3Y=(ya*Math.sin(ab.startAngle+(ab.angle/2)));p4X=(ya*Math.cos(ab.startAngle+(ab.angle/1.5)));p4Y=(ya*Math.sin(ab.startAngle+(ab.angle/1.5)));p5X=(ya*Math.cos(ab.startAngle+ab.angle));p5Y=(ya*Math.sin(ab.startAngle+ab.angle));arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]];arrPoint=[x,y];if(ma(arrPoly,arrPoint)){ctx.restore();return {datapoint:[ab.percent,ab.data],dataIndex:0,series:ab,seriesIndex:za};}}ctx.restore();}}return null;}function oa(i){qa('plothover',i);}function pa(i){qa('plotclick',i);}function qa(i,x){var y=m.offset(),va=parseInt(x.pageX-y.left),wa=parseInt(x.pageY-y.top),xa=na(va,wa);if(l.grid.autoHighlight){for(var ya=0;ya<ba.length;++ya){var za=ba[ya];if(za.auto==i&&!(xa&&za.series==xa.series))sa(za.series);}if(xa)ra(xa.series,i);}var ab={pageX:x.pageX,pageY:x.pageY};o.trigger(i,[ab,xa]);}function ra(i,x){if(typeof i=="number")i=series[i];var y=ta(i);if(y==-1){ba.push({series:i,auto:x});m.triggerRedrawOverlay();}else if(!x)ba[y].auto=false;}function sa(i){if(i==null){ba=[];m.triggerRedrawOverlay();}if(typeof i=="number")i=series[i];var x=ta(i);if(x!=-1){ba.splice(x,1);m.triggerRedrawOverlay();}}function ta(i){for(var x=0;x<ba.length;++x){var y=ba[x];if(y.series==i)return x;}return -1;}function ua(x,y){var va=x.getOptions(),wa=va.series.pie.radius>1?va.series.pie.radius:p*va.series.pie.radius;y.save();y.translate(q,r);y.scale(1,va.series.pie.tilt);for(i=0;i<ba.length;++i)xa(ba[i].series);la(y);y.restore();function xa(i){if(i.angle<0)return;y.fillStyle="rgba(255, 255, 255, "+va.series.pie.highlight.opacity+")";y.beginPath();if(Math.abs(i.angle-Math.PI*2)>1e-09)y.moveTo(0,0);y.arc(0,0,wa,i.startAngle,i.startAngle+i.angle,false);y.closePath();y.fill();}}}var l={series:{pie:{show:false,radius:'auto',innerRadius:0,startAngle:3/2,tilt:1,offset:{top:0,left:'auto'},stroke:{color:'#FFF',width:1},label:{show:'auto',formatter:function(i,m){return '<div style="font-size:x-small;text-align:center;padding:2px;color:'+m.color+';">'+i+'<br/>'+Math.round(m.percent)+'%</div>';},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:'Other'},highlight:{opacity:.5}}}};h.plot.plugins.push({init:k,options:l,name:"pie",version:"1.0"});})(g);});
__d("insights-view-graph-styles",["insights-date-utils","insights-constants","insights-number-utils","flot-pie"],function(a,b,c,d,e,f){var g=b('insights-date-utils').DateFormatter,h=b('insights-date-utils').midnightsInRange,i=b('insights-constants').InsightsConstants,j=b('insights-number-utils').NumberFormatter,k={yAxisTicksGenerator:function(t){var u=2;if(t.max>u){var v=j.magnitude(t.max);u=Math.ceil(t.max/Math.pow(10,v))*Math.pow(10,v);}if(u%2==1)u++;return [[0,''],[u/2,j.abbrevInt(u/2)],[u,j.abbrevInt(u)]];},options:function(){return {grid:{borderWidth:1,hoverable:true,autoHighlight:true,mouseActiveRadius:5},yaxis:{min:0,ticks:k.yAxisTicksGenerator},shadowSize:0};}},l={options:function(){return {lines:{show:true,fill:.1}};}},m={options:function(){return {lines:{show:true}};}},n={options:function(){return {points:{show:true,radius:2,fill:true,fillColor:false}};}},o={options:function(){return {bars:{show:true,align:'center',lineWidth:0,fill:true,fillColor:{colors:[{opacity:1}]},barWidth:.75}};}},p={options:function(){b('flot-pie');return {series:{pie:{show:true}}};}},q={options:function(){var t=o.options().bars;t.barWidth=.75*i.MS_PER_DAY;return {bars:t};}},r={tickSize:function(t){return t>i.TICK_SIZE_THRESHOLD?i.TICK_SIZE_LONG:i.TICK_SIZE_SHORT;},xAxisTicksGenerator:function(t){var u=[],v=Math.round((t.max-t.min)/i.MS_PER_DAY)+1,w=r.tickSize(v),x=null,y=h(t.min,t.max);for(var z=0;z<y.length;z++){var aa=new Date(y[z]+i.getPTOffset(y[z])).getUTCDate();if(x==null&&aa%w===0)x=z;if(x!=null&&(z-x)%w===0)u.push(y[z]);}return u;},options:function(){return {xaxis:{mode:'time',tickFormatter:g.abbrevMonthDateFromTimestamp,ticks:r.xAxisTicksGenerator,tickLength:5}};}},s={frequencyTicksGenerator:function(t){var u=[];for(var v=0;v<i.FrequencyBuckets.length;v++)u.push([v,i.FrequencyBuckets[v]]);return u;},options:function(){return {xaxis:{ticks:s.frequencyTicksGenerator,min:-.5,tickLength:0,max:i.FrequencyBuckets.length}};}};f.BaseGraph=k;f.AreaGraph=l;f.LineGraph=m;f.BarGraph=o;f.PointGraph=n;f.PieChart=p;f.TimeSeries=r;f.TimeSeriesBarGraph=q;f.ReachFrequencyGraph=s;});
__d("insights-view-graph-utils",["uki-utils","insights-number-utils","insights-date-utils","insights-constants","tx"],function(a,b,c,d,e,f){var g=b('uki-utils'),h=b('insights-number-utils').NumberFormatter,i=b('insights-date-utils').DateFormatter,j=b('insights-constants').InsightsConstants,k=b('tx');TooltipFormatters={main:function(l){var m=this._getItemSeriesIndex(l),n=l.datapoint[0],o=m===0?l.datapoint[1]:this.series()[m][l.dataIndex][1],p=h.integer(o);if(m===0){return (p==1?"1 julkaisu":k._("{num} julkaisua",{num:p}))+'<br/>'+i.shortDate(new Date(n));}else if(m==1){return TooltipFormatters.formatPTAT(n,p);}else if(m==2){return TooltipFormatters.formatReach(n,p);}else return null;},reachAndPTAT:function(l){var m=this._getItemSeriesIndex(l),n=l.datapoint[0],o=this.series()[m][l.dataIndex][1],p=h.integer(o);if(m===0){return TooltipFormatters.formatPTAT(n,p);}else if(m===1)return TooltipFormatters.formatReach(n,p);return null;},formatPTAT:function(l,m){return (m==1?"1 henkil\u00f6 puhuu t\u00e4st\u00e4":k._("{num} henkil\u00f6\u00e4 puhuu t\u00e4st\u00e4",{num:m}))+'<br/>'+i.weekRangeString(l);},formatReach:function(l,m){return (m==1?"1 henkil\u00f6 tavoitettu":k._("{num} henkil\u00f6\u00e4 tavoitettu",{num:m}))+'<br/>'+i.weekRangeString(l);},likes:function(l){var m=this.getOriginalSeriesIndex(l.seriesIndex),n=i.shortDate(new Date(l.datapoint[0])),o=h.integer(l.datapoint[1]);if(m===0){return (o==1?"1 uusi tykk\u00e4ys":k._("{num} uutta tykk\u00e4yst\u00e4",{num:o}))+'<br/>'+n;}else if(m==1){return (o==1?"1 tykk\u00e4yksen poisto":k._("{num} tykk\u00e4yksen poistoa",{num:o}))+'<br/>'+n;}else return null;},reach:function(l){var m=this._reachGraph.getOriginalSeriesIndex(l.seriesIndex),n=this._reachGraph._metrics[m].label;return TooltipFormatters.peopleTip(l,' ('+n+')');},reachFrequency:function(l){var m=j.FrequencyBuckets[l.datapoint[0]],n=h.integer(l.datapoint[1]),o;if(n==1){if(m==1){o="1 henkil\u00f6 tavoitettu 1 kerran";}else o=k._("1 henkil\u00f6 tavoitettu {freq} kertaa",{freq:m});}else if(m==1){o=k._("{num} henkil\u00f6\u00e4 tavoitettu 1 kerran",{num:n});}else o=k._("{num} henkil\u00f6\u00e4 tavoitettu {freq} kertaa",{num:n,freq:m});return o+'<br/>'+i.weekRangeString(this.frequencyBreakdownDate());},pageViews:function(l){var m=this.getOriginalSeriesIndex(l.seriesIndex),n=i.shortDate(new Date(l.datapoint[0])),o=h.integer(l.datapoint[1]);if(m===0){return (o==1?"1 sivunn\u00e4ytt\u00f6":k._("{num} sivunn\u00e4ytt\u00f6\u00e4",{num:o}))+'<br/>'+n;}else if(m==1){return (o==1?"1 yksil\u00f6llinen sivunn\u00e4ytt\u00f6":k._("{num} yksil\u00f6llist\u00e4 sivunn\u00e4ytt\u00f6\u00e4",{num:o}))+'<br/>'+n;}else return null;},talking:function(l){return TooltipFormatters.peopleTip(l);},viralReach:function(l){return TooltipFormatters.peopleTip(l);},peopleTip:function(l,m){var n=h.integer(l.datapoint[1]),o=n==1?"1 henkil\u00f6":k._("{num} henkil\u00f6\u00e4",{num:n});return o+(m||'')+'<br/>'+i.weekRangeString(l.datapoint[0]);},checkinsType:function(l){var m=h.integer(l.datapoint[1]);return (m==1?"1 paikkamerkint\u00e4":k._("{num} paikkamerkint\u00e4\u00e4",{num:m}))+'<br/>'+i.weekRangeString(l.datapoint[0]);}};f.TooltipFormatters=TooltipFormatters;});
__d("uki-fb-view-text",["uki-function","uki-dom","uki-view","uki-view-container"],function(a,b,c,d,e,f){var g=b('uki-function'),h=b('uki-dom'),i=b('uki-view'),j=b('uki-view-container').Container,k=i.newClass('fb.Text',j,{}),l=k.prototype;l._createDom=function(m){this._content=h.createElement('span',{className:'ufb-text-content'});this._dom=h.createElement(m.tagName||'div',{className:'ufb-text ufb-text_size-medium'},[this._content]);};g.delegateProp(l,'html','_content','innerHTML');l.size=i.newClassMapProp({small:'ufb-text_size-small',medium:'ufb-text_size-medium',large:'ufb-text_size-large',huge:'ufb-text_size-huge',giant:'ufb-text_size-giant'});l.color=i.newClassMapProp({black:'ufb-text_color-black',gray:'ufb-text_color-gray'});l.weight=i.newClassMapProp({normal:'ufb-text_weight-normal',bold:'ufb-text_weight-bold'});l.text=function(m){return this.html(m&&h.escapeHTML(m));};f.Text=k;});
__d("insights-view-hoverable-graph",["uki-dom","uki-function","uki-view","uki-builder","uki-utils","uki-env","uki-view-container","uki-fb-view-text","DoNotUseJQuery17","insights-view-base-graph"],function(a,b,c,d,e,f){var g=b('uki-dom'),h=b('uki-function'),i=b('uki-view'),j=b('uki-builder').build,k=b('uki-utils'),l=b('uki-env').doc,m=b('uki-view-container').Container,n=b('uki-fb-view-text').Text,o=b('DoNotUseJQuery17'),p=b('insights-view-base-graph').BaseGraph,q=i.newClass('insights.HoverableGraph',p,{tooltipFormatter:h.newProp('tooltipFormatter',function(r){this._tooltipFormatter=h.bind(r,this);this._listenToPlotHover();}),_listenToPlotHover:function(){o(this.dom()).bind('plothover',h.bind(this._onHover,this));},_onHover:function(r,s,t){var u=o('.graphTooltip');if(t){if(!u||this._previousSeriesIndex!=this._getItemSeriesIndex(t)||this._previousDataIndex!=t.dataIndex){this._previousSeriesIndex=this._getItemSeriesIndex(t);this._previousDataIndex=t.dataIndex;u.remove();this._showTooltip(t,s);}}else{u.remove();this._previousSeriesIndex=null;this._previousDataIndex=null;}},_showTooltip:function(r,s){var t=this.tooltipFormatter()(r),u=this._tooltipCoords(r,s),v=j([{view:m,className:'graphTooltip',childViews:[{view:m,init:{tagName:'span'},as:'text',addClass:'graphTooltipText',html:t}],style:{top:u.y+'px',left:u.x+'px'}}]);l.body.appendChild(v.dom());},_tooltipCoords:function(r,s){return {x:r.pageX?r.pageX+10:s.pageX+1,y:r.pageY?r.pageY-20:s.pageY+1};},_getItemSeriesIndex:function(r){return r.series.seriesIndex||r.seriesIndex;}});f.HoverableGraph=q;});
__d("insights-view-graph-with-legend",["uki-function","uki-dom","uki-view","uki-builder","uki-utils","uki-view-container","insights-view-hoverable-graph"],function(a,b,c,d,e,f){var g=b('uki-function'),h=b('uki-dom'),i=b('uki-view'),j=b('uki-builder').build,k=b('uki-utils'),l=b('uki-view-container').Container,m=b('insights-view-hoverable-graph').HoverableGraph,n=i.newClass('insights.GraphWithLegend',l,{_createDom:function(o){this._dom=h.createElement('div');var p=j([{view:l,addClass:'graph-legend',as:'legend'},{view:o.baseGraph||m,as:'graph'}]);p.appendTo(this);this._legendView=p.view('legend');this._graphView=p.view('graph');this._graphView.legendContainer(this._legendView);},plot:g.newDelegateCall('_graphView','plot'),graphView:function(){return this._graphView;}});g.delegateProp(n.prototype,['colors','legend','series','mixins','options','addOptions','loading','noColumnsLegend','legendStyle','tooltipFormatter','maxPoints'],'_graphView');f.GraphWithLegend=n;});
/**
 * @providesModule flot-stack
 * @option preserve-header
 *
 * Copyright (c) 2007-2009 IOLA and Ole Laursen
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Flot plugin for stacking data sets, i.e. putting them on top of each
 * other, for accumulative graphs.
 *
 * The plugin assumes the data is sorted on x (or y if stacking
 * horizontally). For line charts, it is assumed that if a line has an
 * undefined gap (from a null point), then the line above it should have
 * the same gap - insert zeros instead of "null" if you want another
 * behaviour. This also holds for the start and end of the chart. Note
 * that stacking a mix of positive and negative values in most instances
 * doesn't make sense (so it looks weird).
 *
 * Two or more series are stacked when their "stack" attribute is set to
 * the same key (which can be any number or string or just "true"). To
 * specify the default stack, you can set
 *
 *   series: {
 *     stack: null or true or key (number/string)
 *   }
 *
 * or specify it for a specific series
 *
 *   $.plot($("#placeholder"), [{ data: [ ... ], stack: true }])
 *
 * The stacking order is determined by the order of the data series in
 * the array (later series end up on top of the previous).
 *
 * Internally, the plugin modifies the datapoints in each series, adding
 * an offset to the y value. For line series, extra data points are
 * inserted through interpolation. If there's a second y value, it's also
 * adjusted (e.g for bar charts or filled areas).
 */__d("flot-stack",["flot"],function(a,b,c,d,e,f){var g=b('flot');(function(){var h={series:{stack:null}};function i(j){function k(m,n){var o=null;for(var p=0;p<n.length;++p){if(m==n[p])break;if(n[p].stack==m.stack)o=n[p];}return o;}function l(n,o,p){if(o.stack==null)return;var q=k(o,n.getData());if(!q)return;var r=p.pointsize,s=p.points,t=q.datapoints.pointsize,u=q.datapoints.points,v=[],w,x,y,z,aa,ba,ca=o.lines.show,da=o.bars.horizontal,ea=r>2&&(da?p.format[2].x:p.format[2].y),fa=ca&&o.lines.steps,ga=true,ha=da?1:0,ia=da?0:1,ja=0,ka=0,la;while(true){if(ja>=s.length)break;la=v.length;if(s[ja]==null){for(m=0;m<r;++m)v.push(s[ja+m]);ja+=r;}else if(ka>=u.length){if(!ca)for(m=0;m<r;++m)v.push(s[ja+m]);ja+=r;}else if(u[ka]==null){for(m=0;m<r;++m)v.push(null);ga=true;ka+=t;}else{w=s[ja+ha];x=s[ja+ia];z=u[ka+ha];aa=u[ka+ia];ba=0;if(w==z){for(m=0;m<r;++m)v.push(s[ja+m]);v[la+ia]+=aa;ba=aa;ja+=r;ka+=t;}else if(w>z){if(ca&&ja>0&&s[ja-r]!=null){y=x+(s[ja-r+ia]-x)*(z-w)/(s[ja-r+ha]-w);v.push(z);v.push(y+aa);for(m=2;m<r;++m)v.push(s[ja+m]);ba=aa;}ka+=t;}else{if(ga&&ca){ja+=r;continue;}for(m=0;m<r;++m)v.push(s[ja+m]);if(ca&&ka>0&&u[ka-t]!=null)ba=aa+(u[ka-t+ia]-aa)*(w-z)/(u[ka-t+ha]-z);v[la+ia]+=ba;ja+=r;}ga=false;if(la!=v.length&&ea)v[la+2]+=ba;}if(fa&&la!=v.length&&la>0&&v[la]!=null&&v[la]!=v[la-r]&&v[la+1]!=v[la-r+1]){for(m=0;m<r;++m)v[la+r+m]=v[la+m];v[la+1]=v[la-r+1];}}p.points=v;}j.hooks.processDatapoints.push(l);}g.plot.plugins.push({init:i,options:h,name:'stack',version:'1.2'});})();});
/**
 * @providesModule flot-bubble
 * @option preserve-header
 *
 * Copyright (c) 2007-2009 IOLA and Ole Laursen
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Flot plugin for bubble charting
 *
 * To activate bubbles:
 *
 * plot = $.plot($("#placeholder"), [
 * // data needs to be in the form [x,y,z] where z is the radius of the point
 * { data: [[1,2,10],[4,6,8],[3,1,4]], color: '#A1FDFF', label: 'boom' }
 * ],
 * {
 *   series: {
 *     bubble: true, // set this to true to activate bubbles, otherwise your data will be plotted as points
 *     points: { show: true }, // bubbles will only work with point charts, the plugin will NOT attempt to bubble a bar chart
 *     lines:  { show: true } // the bubble plugin supports connecting bubbles in a series with lines
 *   },
 * }
 * );
 */__d("flot-bubble",["DoNotUseJQuery17","flot"],function(a,b,c,d,e,f){var g=b('DoNotUseJQuery17'),h=b('flot');(function(i){var j={series:{bubble:null}};function k(l){function m(){if(window.console)bagofholding.apply(console,arguments);}function n(fa,ga){function ha(na,oa,pa,qa,ra,sa,ta,ua){var va=na.points,wa=na.pointsize;for(var xa=0;xa<va.length;xa+=wa){var ya=va[xa],za=va[xa+1];if(ya==null||ya<sa.min||ya>sa.max||za<ta.min||za>ta.max)continue;var ab=xa/2,oa=ua[ab][2];ga.beginPath();var bb=l.getOptions();if(bb.series.bubble_options&&bb.series.bubble_options.occupancy){ga.arc(sa.p2c(ya),ta.p2c(za)+(bb.series.bubble_options.radius_offset-oa),oa,0,ra,false);}else ga.arc(sa.p2c(ya),ta.p2c(za)+qa,oa,0,ra,false);if(pa){ga.fillStyle=pa;ga.fill();}ga.stroke();}}ga.save();var ia=l.getPlotOffset();ga.translate(ia.left,ia.top);var ja=fa.lines.lineWidth,ka=fa.shadowSize,la=fa.points.radius;if(ja>0&&ka>0){var ma=ka/2;ga.lineWidth=ma;ga.strokeStyle="rgba(0,0,0,0.1)";ha(fa.datapoints,la,null,ma+ma/2,Math.PI,fa.xaxis,fa.yaxis,fa.data);ga.strokeStyle="rgba(0,0,0,0.2)";ha(fa.datapoints,la,null,ma/2,Math.PI,fa.xaxis,fa.yaxis,fa.data);}ga.lineWidth=ja;ga.strokeStyle=fa.color;ha(fa.datapoints,la,o(fa.points,fa.color),0,2*Math.PI,fa.xaxis,fa.yaxis,fa.data);ga.restore();}function o(fa,ga,ha,ia){var ja=fa.fill;if(!ja)return null;if(fa.fillColor)return p(ga,ha,ia,ga);var ka=i.color.parse(ga);ka.a=typeof ja=="number"?ja:.4;ka.normalize();return ka.toString();}function p(fa,ga,ha,ia){if(typeof fa=="string"){return fa;}else{var ja=ctx.createLinearGradient(0,ha,0,ga);for(var ka=0,la=fa.colors.length;ka<la;++ka){var ma=fa.colors[ka];if(typeof ma!="string"){var na=i.color.parse(ia);if(ma.brightness!=null)na=na.scale('rgb',ma.brightness);if(ma.opacity!=null)na.a*=ma.opacity;ma=na.toString();}ja.addColorStop(ka/(la-1),ma);}return ja;}}var q=[];function r(fa){t("plothover",fa,function(ga){return ga.hoverable!=false;});}function s(fa){t("plotclick",fa,function(ga){return ga.clickable!=false;});}function t(fa,event,ga){var ha=l.bubble.eventHolder.offset(),ia=event.pageX-ha.left-l.getPlotOffset().left,ja=event.pageY-ha.top-l.getPlotOffset().top,ka=l.c2p({left:ia,top:ja});ka.pageX=event.pageX;ka.pageY=event.pageY;var la=u(ia,ja,ga);if(la){la.pageX=parseInt(la.series.xaxis.p2c(la.datapoint[0])+ha.left+l.getPlotOffset().left);la.pageY=parseInt(la.series.yaxis.p2c(la.datapoint[1])+ha.top+l.getPlotOffset().top);}if(l.getOptions().grid.autoHighlight){for(var ma=0;ma<q.length;++ma){var na=q[ma];if(na.auto==fa&&!(la&&na.series==la.series&&na.point==la.datapoint))w(na.series,na.point);}if(la)v(la.series,la.datapoint,fa);}l.getPlaceholder().trigger(fa,[ka,la]);}function u(fa,ga,ha){var ia=l.getOptions().grid.mouseActiveRadius,ja=ia*ia+1,ka=null,la=false,ma,na,oa=l.getData();for(ma=oa.length-1;ma>=0;--ma){if(!ha(oa[ma]))continue;var pa=oa[ma],qa=pa.xaxis,ra=pa.yaxis,sa=pa.datapoints.points,ta=pa.datapoints.pointsize,ua=qa.c2p(fa),va=ra.c2p(ga);if(pa.lines.show||pa.points.show)for(na=0;na<sa.length;na+=ta){var wa=sa[na],xa=sa[na+1];if(wa==null)continue;var ya=aa(pa,[wa,xa]),za=ya*ya+1,ab=ya/qa.scale,bb=ya/ra.scale;if(wa-ua>ab||wa-ua<-ab||xa-va>bb||xa-va<-bb)continue;var cb=Math.abs(qa.p2c(wa)-fa),db=Math.abs(ra.p2c(xa)-ga),eb=cb*cb+db*db;if(eb<za){za=eb;ka=[ma,na/ta];}}if(pa.bars.show&&!ka){var fb=pa.bars.align=="left"?0:-pa.bars.barWidth/2,gb=fb+pa.bars.barWidth;for(na=0;na<sa.length;na+=ta){var wa=sa[na],xa=sa[na+1],hb=sa[na+2];if(wa==null)continue;if(oa[ma].bars.horizontal?(ua<=Math.max(hb,wa)&&ua>=Math.min(hb,wa)&&va>=xa+fb&&va<=xa+gb):(ua>=wa+fb&&ua<=wa+gb&&va>=Math.min(hb,xa)&&va<=Math.max(hb,xa)))ka=[ma,na/ta];}}}if(ka){ma=ka[0];na=ka[1];var ta=oa[ma].datapoints.pointsize;return {datapoint:oa[ma].datapoints.points.slice(na*ta,(na+1)*ta),dataIndex:na,series:oa[ma],seriesIndex:ma};}return null;}function v(fa,ga,ha){if(typeof fa=="number")fa=series[fa];if(typeof ga=="number")ga=fa.data[ga];var ia=x(fa,ga);if(ia==-1){q.push({series:fa,point:ga,auto:ha});l.triggerRedrawOverlay();}else if(!ha)q[ia].auto=false;}function w(fa,ga){if(fa==null&&ga==null){q=[];triggerRedrawOverlay();}if(typeof fa=="number")fa=series[fa];if(typeof ga=="number")ga=fa.data[ga];var ha=x(fa,ga);if(ha!=-1){q.splice(ha,1);l.triggerRedrawOverlay();}}function x(fa,ga){for(var ha=0;ha<q.length;++ha){var ia=q[ha];if(ia.series==fa&&ia.point[0]==ga[0]&&ia.point[1]==ga[1])return ha;}return -1;}function y(fa,ga){var ha=ga[0],ia=ga[1],ja=fa.xaxis,ka=fa.yaxis;if(ha<ja.min||ha>ja.max||ia<ka.min||ia>ka.max)return;var la=l.bubble.octx,ma=aa(fa,ga),na=ma+fa.points.lineWidth/2,oa=l.getPlotOffset();la.lineWidth=fa.points.lineWidth*5.5;la.strokeStyle=i.color.parse(fa.color).scale('a',.4).toString();la.beginPath();la.arc(ja.p2c(ha)+oa.left,ka.p2c(ia)+oa.top,na,0,2*Math.PI,false);la.stroke();}function z(fa,ga){var ha=fa[ga];if(!ha||ha==1)return axes[ga];if(typeof ha=="number")return axes[ga.charAt(0)+ha+ga.slice(1)];return ha;}function aa(fa,ga){var ha=fa.datapoints.points,ia=fa.datapoints.pointsize;for(var ja=ha.length;ja>1;ja-=ia){var ka=ha[ja-2],la=ha[ja-1];if(ga[0]==ka&&ga[1]==la){var ma=(ja-2)/2;return fa.data[ma][2];}}return 0;}function ba(fa,ga){fa.bubble.eventHolder=ga;var ha=fa.getOptions();if(ca()&&ha.grid.hoverable)ga.unbind('mousemove').mousemove(r);if(ha.series.bubble&&ha.grid.clickable)ga.unbind('click').click(s);}function ca(){return !!l.getOptions().series.bubble&&!!l.getOptions().series.points.show;}function da(fa,ga){var ha=fa.getData();i.each(ha,function(ia,ja){if(ja.bubble)n(ja,ga);});}function ea(fa,ga){fa.bubble.octx=ga;i.each(q,function(ha,ia){y(ia.series,ia.point);});}l.bubble={eventHolder:null,octx:null};l.hooks.bindEvents.push(ba);l.hooks.draw.push(da);l.hooks.drawOverlay.push(ea);}h.plot.plugins.push({init:k,options:j,name:'bubble',version:'0.1'});})(g);});
__d("insights-main-graph",["uki-function","uki-dom","uki-view","uki-builder","uki-utils","flot-stack","flot-bubble","insights-constants","insights-view-graph-styles","insights-view-graph-utils","insights-view-graph-with-legend","insights-view-hoverable-graph"],function(a,b,c,d,e,f){var g=b('uki-function'),h=b('uki-dom'),i=b('uki-view'),j=b('uki-builder').build,k=b('uki-utils'),l=b('flot-stack'),m=b('flot-bubble'),n=b('insights-constants').InsightsConstants.Events,o=b('insights-view-graph-styles'),p=b('insights-view-graph-utils'),q=b('insights-view-graph-with-legend').GraphWithLegend,r=b('insights-view-hoverable-graph').HoverableGraph,s=b('insights-constants').InsightsConstants,t=.5,u=.75,v=5,w=2,x=10,y=1.2,z=i.newClass('insights.Graph',r,{showPoints:g.newProp('showPoints'),_showPoints:true,showBubbles:g.newProp('showBubbles'),_showBubbles:true,bubbleMaxSize:g.newProp('bubbleMaxSize'),_bubbleMaxSize:x,bubbleMinSize:g.newProp('bubbleMinSize'),_bubbleMinSize:v,bubbleIncrement:g.newProp('bubbleIncrement'),_bubbleIncrement:w,_layout:function(){this.on(n.Plotted,g.bind(function(){var aa=this.series&&this.series()[0];aa.length&&this.trigger({type:n.Ready});},this));},_stackInsights:function(aa,ba){this._maxScaledReach=0;var ca=0;for(var da=0;da<ba.length;da++){var ea=Math.pow(ba[da][1],u),fa=Math.pow(aa[da][1],u);this._maxScaledReach=Math.max(this._maxScaledReach,ea);if(ea>0)ca=Math.max(ca,fa/ea);}var ga=ca===0?1:t/ca,ha=[],ia=[],ja=Math.min(aa.length,ba.length);for(da=0;da<ja;da++){var ka=ba[da][1]===0?0:Math.pow(aa[da][1],u)*ga;ha.push([aa[da][0],ka]);ia.push([ba[da][0],Math.pow(ba[da][1],u)-ha[da][1]]);}var la=this.showPoints()?o.PointGraph.options().points:{};return [{data:ha,stack:true,yaxis:1,points:la},{data:ia,stack:true,yaxis:2,points:la}];},_bubbleSize:function(aa){return Math.min(this.bubbleMinSize()+this.bubbleIncrement()*(aa-1),this.bubbleMaxSize());},_makeBubbleSeries:function(aa,ba){var ca=[],da=Math.min(ba,aa.length);for(var ea=0;ea<da;ea++)if(aa[ea][1]>0){ca.push([aa[ea][0],aa[ea][1],this._bubbleSize(aa[ea][1])]);continue;}return {data:ca,bubble:true,points:{show:true},lines:{show:false},yaxis:3};},_yaxes:function(){var aa={tickLength:0,ticks:[],min:0,max:this._maxScaledReach*y,labelWidth:this.bubbleMaxSize()/2},ba=k.extend({},aa,{position:'right'}),ca={show:false,min:0,max:s.MAX_INT};return [aa,ba,ca];},_flotData:function(){var aa=k.toArray(this.series()),ba=this.showBubbles()?3:2;if(!aa||aa.length!=ba)return null;var ca=[];if(this.showBubbles()){var da=aa.shift(),ea=Math.min.apply(null,k.map(aa,function(ia){return ia.length;}));ca=[this._makeBubbleSeries(da,ea)];}var fa=aa.shift(),ga=aa.shift();ca=ca.concat(this._stackInsights(fa,ga));for(var ha=0;ha<ca.length;ha++){ca[ha].label=this._chooseLabel(ha);ca[ha].color=this._chooseColor(ha);}return ca;},_flotOptions:function(){var aa=r.prototype._flotOptions.call(this);return k.extend(aa,{yaxes:this._yaxes()});}});f.InsightsMainGraph=z;});
__d("AdminPanelInsights",["uki-builder","uki-utils","ge","insights-constants","insights-view-graph-styles","insights-view-graph-utils","insights-view-graph-with-legend","insights-main-graph","insights-date-utils","AsyncRequest"],function(a,b,c,d,e,f){var g=b('uki-builder').build,h=b('uki-utils'),i=b('ge'),j=b('insights-constants').InsightsConstants,k=b('insights-view-graph-styles'),l=b('insights-view-graph-utils').TooltipFormatters,m=b('insights-view-graph-with-legend').GraphWithLegend,n=b('insights-main-graph').InsightsMainGraph,o=b('insights-date-utils').midnightsInRange,p=b('AsyncRequest'),q=[j.ColorsMap.magenta,j.ColorsMap.green,j.ColorsMap.blue],r={options:function(){return {grid:h.extend(k.BaseGraph.options().grid,{minBorderMargin:8}),xaxis:{ticks:[]}};}},s={fetchData:function(t){new p().setURI('/ajax/timeline/pages/admin_panel_insights.php').setData({profile_id:t}).setHandler(this.plotGraph).send();},plotGraph:function(t){var u=t.getPayload(),v=u.post_counts,w=u.talking,x=u.reach,y=u.show_bubbles,z=u.legend,aa=u.container_id,ba=[v,w,x],ca=l.main;if(!y){q.shift();z.shift();ba.shift();ca=l.reachAndPTAT;}var da=g({view:m,init:{baseGraph:n},as:'graph',mixins:[k.BaseGraph,k.TimeSeries,k.AreaGraph,r],colors:q,legend:z,tooltipFormatter:ca}),ea=i(aa);da.attach(ea);var fa=da.view('graph');if(u.page_insights_url)fa.on('click',function(){window.open(u.page_insights_url,'_blank');});var ga=fa.graphView();ga.showBubbles(y);ga.showPoints(false);ga.bubbleMinSize(2);ga.bubbleMaxSize(5);ga.bubbleIncrement(1);ga.plot(ba);ga.loading(false);}};e.exports=s;});
__d("legacy:Messaging",["Messaging"],function(a,b,c,d){a.Messaging=b('Messaging');},3);
__d("InlineFriendInviter",["AsyncRequest","CSS","$","DOM"],function(a,b,c,d,e,f){var g=b('AsyncRequest'),h=b('CSS'),i=b('$'),j=b('DOM'),k={sendInvite:function(l,m,n,o){new g().setURI('/ajax/pages/invite/send_single/').setData({page_id:l,invitee:m,elem_id:n,action:o}).send();h.addClass(n,'yellow');h.hide(j.find(i(n),'.button'));}};e.exports=k;});
__d("PagesAnchorDialogEnforcer",["array-extensions","event-extensions","AsyncRequest","copyProperties","DOM","URI"],function(a,b,c,d,e,f){b('array-extensions');b('event-extensions');var g=b('AsyncRequest'),h=b('copyProperties'),i=b('DOM'),j=b('URI'),k={LOCATION_COMPOSER:1,LOCATION_MILESTONE:2,LOCATION_SPINE:3,LOCATION_EDIT_MENU:4,LOCATION_HIDE_JOINED:5},l=[];function m(r,s,t){var u=i.find(document,r);n(u,s,t);}function n(r,s,t){l.push(Event.listen(r,'click',function(u){new g().setURI('/ajax/timeline/pages/anchor_dialog.php').setData({profile_id:s,location:t}).send();return false;},Event.Priority.URGENT));}function o(r,s){p();switch(s){case k.LOCATION_COMPOSER:case k.LOCATION_MILESTONE:case k.LOCATION_SPINE:case k.LOCATION_EDIT_MENU:case k.LOCATION_HIDE_JOINED:j.getRequestURI().go();break;default:}}function p(){l.forEach(function(r){r.remove();});l=[];}var q={enforceDialogOnNode:n,enforceDialogOnSelector:m,onSuccessForLocation:o};e.exports=q;});
__d("TimelineCommentsLoader",["event-extensions","CommentPrelude","CSS","DOM","Parent"],function(a,b,c,d,e,f){b('event-extensions');var g=b('CommentPrelude'),h=b('CSS'),i=b('DOM'),j=b('Parent'),k={init:function(){k.init=bagofholding;Event.listen(document.body,'click',function(l){var m=j.byClass(l.getTarget(),'fbTimelineFeedbackCommentLoader');if(m){l.kill();g.click(m,false);var n=j.byTag(m,'form'),o=i.scry(n,'li.uiUfiViewAll input');if(!o.length)o=i.scry(n,'li.fbUfiViewPrevious input');o[0].click();h.show(i.find(n,'li.uiUfiComments'));h.removeClass(m,'fbTimelineFeedbackCommentLoader');}});}};e.exports=k;});
function PagesTimelineScrubber(a){this.parent.construct(this,a);this._panelShown=ge('admin_panel')&&CSS.shown('admin_panel');this._stickyHeaderShown=false;this._scrubberSubscribes=[Arbiter.subscribe(TimelineStickyHeader.VISIBLE,function(b,c){this._stickyHeaderShown=c;this._updateScrubberClass();}.bind(this)),Arbiter.subscribe(PagesTimelineScrubber.PANEL_VISIBLE,function(b,c){this._panelShown=c;this._updateScrubberClass();}.bind(this))];this._updateScrubberClass();}Class.extend(PagesTimelineScrubber,'TimelineMainScrubber');copy_properties(PagesTimelineScrubber,{PANEL_VISIBLE:'AdminPanel/visible',PANEL_HEIGHT:475,ANIMATION_TIME_MS:250});copy_properties(PagesTimelineScrubber.prototype,{OFFSET:77,_updateScrubberClass:function(){var a=this._stickyHeaderShown||!this._panelShown;CSS.conditionClass(this._root,'fixed_elem',a);CSS.conditionClass('rightColContent','pagesTimelineButtonShown',a);CSS.conditionClass('rightColContent','adminPanelVisible',!a);},reset:function(){this.parent.reset();this._scrubberSubscribes&&this._scrubberSubscribes.forEach(Arbiter.unsubscribe);}});PagesTimelineScrubber.show=function(a,b){if(ge('admin_panel')&&CSS.shown('admin_panel')){DOMScroll.scrollTo($('admin_panel'),true);return;}var c=$('admin_panel');CSS.show('admin_panel');CSS.show('admin_panel_body');if(b){c.style.height=PagesTimelineScrubber.PANEL_HEIGHT+'px';}else{c.style.height=0;animation(c).to('height',PagesTimelineScrubber.PANEL_HEIGHT).duration(PagesTimelineScrubber.ANIMATION_TIME_MS).go();DOMScroll.scrollTo(c,true);}Arbiter.inform('AdminPanel/visible',true,Arbiter.BEHAVIOR_STATE);new AsyncRequest('/ajax/pages/admin_panel/collapse.php').setData({pid:a,collapsed:false,in_tour:b}).setMethod('POST').send();};PagesTimelineScrubber.hide=function(a,b){if(ge('admin_panel')&&!CSS.shown('admin_panel'))return;CSS.hide('admin_panel_body');var c=$('admin_panel');if(b){c.style.height=0;CSS.hide('admin_panel');}else animation(c).to('height',0).hide().duration(PagesTimelineScrubber.ANIMATION_TIME_MS).go();Arbiter.inform('AdminPanel/visible',false,Arbiter.BEHAVIOR_STATE);new AsyncRequest('/ajax/pages/admin_panel/collapse.php').setData({pid:a,collapsed:true,in_tour:b}).setMethod('POST').send();};