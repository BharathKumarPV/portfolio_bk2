(()=>{var Cc=0,Bo=1,Pc=2;var Cs=1,Ic=2,$i=3,ei=0,Fe=1,yn=2,gi=0,Ki=1,zo=2,ko=3,Go=4,ea=5;var Fn=100,Lc=101,Dc=102,Nc=103,Uc=104,na=200,Qi=201,Fc=202,Oc=203,Vo=204,Ho=205,Bc=206,zc=207,kc=208,Gc=209,Vc=210,Hc=211,Wc=212,Xc=213,qc=214,Mr=0,br=1,Er=2,Vi=3,Tr=4,Ar=5,wr=6,Rr=7,Wo=0,Yc=1,Zc=2,Sn=0,Xo=1,qo=2,Yo=3,Zo=4,Jo=5,$o=6,Ko=7;var Qo=300,_i=301,ji=302,ia=303,sa=304,Cr=1e3,_n=1001,Pr=1002,Me=1003,Jc=1004;var Ps=1005;var de=1006,ra=1007;var cn=1008;var Xe=1009,jo=1010,tl=1011,ts=1012,aa=1013,hn=1014,un=1015,dn=1016,oa=1017,la=1018,xi=1020,el=35902,nl=35899,il=1021,sl=1022,fn=1023,Nn=1026,On=1027,rl=1028,ca=1029,ni=1030,ha=1031;var ua=1033,Is=33776,Ls=33777,Ds=33778,Ns=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,xa=37496,va=37488,ya=37489,Us=37490,Sa=37491,Ma=37808,ba=37809,Ea=37810,Ta=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Pa=37816,Ia=37817,La=37818,Da=37819,Na=37820,Ua=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,Fs=36285,Ga=36286;var ps=2300,Ir=2301,yr=2302,Io=2303,Lo=2400,Do=2401,No=2402;var $c=3200;var al=0,Kc=1,en="",ke="srgb",di="srgb-linear",ms="linear",$t="srgb";var Sr=7680;var Qc=519,jc=512,th=513,eh=514,ol=515,nh=516,ih=517,ll=518,cl=519,sh=35044;var hl="300 es",Qe=2e3,gs=2001;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){let i=_s("canvas");return i.style.display="block",i}var ac={},Hi=null;function ul(...i){let t="THREE."+i.shift();Hi?Hi("log",t,...i):console.log(t,...i)}function ah(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=ah(i);let t="THREE."+i.shift();if(Hi)Hi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Lt(...i){i=ah(i);let t="THREE."+i.shift();if(Hi)Hi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in ac||(ac[t]=!0,It(...i))}function oh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lh={[Mr]:Mr,[Er]:wr,[Tr]:Tr,[Vi]:Ar,[br]:br,[wr]:Er,[Rr]:Rr,[Ar]:Vi},xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var co=Math.PI/180,Lr=180/Math.PI;function Os(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function bu(i,t){return(i%t+t)%t}function ho(i,t,e){return(1-e)*i+e*t}function ch(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Eu(i,t){if(t.constructor===Float32Array)return i;let e=dl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Tu(i,t){if(t.constructor===Float32Array)return i;let e=dl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var _l=class _l{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_l.prototype.isVector2=!0;var Xt=_l,vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(m!==y||l!==h||c!==d||u!==g){let f=l*h+c*d+u*g+m*y;f<0&&(h=-h,d=-d,g=-g,y=-y,f=-f);let p=1-o;if(f<.9995){let S=Math.acos(f),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,m=m*p+y*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,m=m*p+y*o;let S=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=S,c*=S,u*=S,m*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*m+l*d-c*h,t[e+1]=l*g+u*h+c*m-o*d,t[e+2]=c*g+u*d+o*h-l*m,t[e+3]=u*g-o*m-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*m+c*d*g,this._y=c*d*m-h*u*g,this._z=c*u*g+h*d*m,this._w=c*u*m-h*d*g;break;case"YXZ":this._x=h*u*m+c*d*g,this._y=c*d*m-h*u*g,this._z=c*u*g-h*d*m,this._w=c*u*m+h*d*g;break;case"ZXY":this._x=h*u*m-c*d*g,this._y=c*d*m+h*u*g,this._z=c*u*g+h*d*m,this._w=c*u*m-h*d*g;break;case"ZYX":this._x=h*u*m-c*d*g,this._y=c*d*m+h*u*g,this._z=c*u*g-h*d*m,this._w=c*u*m+h*d*g;break;case"YZX":this._x=h*u*m+c*d*g,this._y=c*d*m+h*u*g,this._z=c*u*g-h*d*m,this._w=c*u*m-h*d*g;break;case"XZY":this._x=h*u*m-c*d*g,this._y=c*d*m-h*u*g,this._z=c*u*g+h*d*m,this._w=c*u*m+h*d*g;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],m=e[10],h=n+o+m;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>m){let d=2*Math.sqrt(1+n-o-m);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>m){let d=2*Math.sqrt(1+o-n-m);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+m-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xl=class xl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xl.prototype.isVector3=!0;var k=xl,uo=new k,oc=new vn,vl=class vl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],h=n[2],d=n[5],g=n[8],y=s[0],f=s[3],p=s[6],S=s[1],w=s[4],T=s[7],A=s[2],M=s[5],_=s[8];return r[0]=a*y+o*S+l*A,r[3]=a*f+o*w+l*M,r[6]=a*p+o*T+l*_,r[1]=c*y+u*S+m*A,r[4]=c*f+u*w+m*M,r[7]=c*p+u*T+m*_,r[2]=h*y+d*S+g*A,r[5]=h*f+d*w+g*M,r[8]=h*p+d*T+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=e*m+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=m*y,t[1]=(s*c-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fo.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vl.prototype.isMatrix3=!0;var Dt=vl,fo=new Dt,lc=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){let i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$t&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===en?ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:t,whitePoint:n,transfer:ms,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:$t,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var Wt=Au();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ri,Dr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=_s("canvas")),Ri.width=t.width,Ri.height=t.height;let s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wu=0,Wi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var Ru=0,mo=new k,be=class i extends xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=de,a=cn,o=fn,l=Xe,c=i.DEFAULT_ANISOTROPY,u=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Os(),this.name="",this.source=new Wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Qo;be.DEFAULT_ANISOTROPY=1;var yl=class yl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],m=l[8],h=l[1],d=l[5],g=l[9],y=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(m-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,T=(d+1)/2,A=(p+1)/2,M=(u+h)/4,_=(m+y)/4,b=(g+f)/4;return w>T&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=_/n):T>A?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=M/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((f-g)*(f-g)+(m-y)*(m-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(m-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yl.prototype.isVector4=!0;var le=yl,Nr=class extends xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:de,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new be({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:de,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends Nr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xs=class extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ur=class extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ta=class ta{constructor(t,e,n,s,r,a,o,l,c,u,m,h,d,g,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,m,h,d,g,y,f)}set(t,e,n,s,r,a,o,l,c,u,m,h,d,g,y,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=m,p[14]=h,p[3]=d,p[7]=g,p[11]=y,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ta().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*m,g=o*u,y=o*m;e[0]=l*u,e[4]=-l*m,e[8]=c,e[1]=d+g*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,d=l*m,g=c*u,y=c*m;e[0]=h+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,d=l*m,g=c*u,y=c*m;e[0]=h-y*o,e[4]=-a*m,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,d=a*m,g=o*u,y=o*m;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+y,e[1]=l*m,e[5]=y*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-h*m,e[8]=g*m+d,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*m+g,e[10]=h-y*m}else if(t.order==="XZY"){let h=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-m,e[8]=c*u,e[1]=h*m+y,e[5]=a*u,e[9]=d*m-g,e[2]=g*m-d,e[6]=o*u,e[10]=y*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cu,t,Pu)}lookAt(t,e,n){let s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Vn.crossVectors(n,Be),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Vn.crossVectors(n,Be)),Vn.normalize(),Qs.crossVectors(Be,Vn),s[0]=Vn.x,s[4]=Qs.x,s[8]=Be.x,s[1]=Vn.y,s[5]=Qs.y,s[9]=Be.y,s[2]=Vn.z,s[6]=Qs.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],h=n[9],d=n[13],g=n[2],y=n[6],f=n[10],p=n[14],S=n[3],w=n[7],T=n[11],A=n[15],M=s[0],_=s[4],b=s[8],F=s[12],I=s[1],D=s[5],B=s[9],X=s[13],P=s[2],V=s[6],Y=s[10],G=s[14],et=s[3],W=s[7],Q=s[11],j=s[15];return r[0]=a*M+o*I+l*P+c*et,r[4]=a*_+o*D+l*V+c*W,r[8]=a*b+o*B+l*Y+c*Q,r[12]=a*F+o*X+l*G+c*j,r[1]=u*M+m*I+h*P+d*et,r[5]=u*_+m*D+h*V+d*W,r[9]=u*b+m*B+h*Y+d*Q,r[13]=u*F+m*X+h*G+d*j,r[2]=g*M+y*I+f*P+p*et,r[6]=g*_+y*D+f*V+p*W,r[10]=g*b+y*B+f*Y+p*Q,r[14]=g*F+y*X+f*G+p*j,r[3]=S*M+w*I+T*P+A*et,r[7]=S*_+w*D+T*V+A*W,r[11]=S*b+w*B+T*Y+A*Q,r[15]=S*F+w*X+T*G+A*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],m=t[6],h=t[10],d=t[14],g=t[3],y=t[7],f=t[11],p=t[15],S=l*d-c*h,w=o*d-c*m,T=o*h-l*m,A=a*d-c*u,M=a*h-l*u,_=a*m-o*u;return e*(y*S-f*w+p*T)-n*(g*S-f*A+p*M)+s*(g*w-y*A+p*_)-r*(g*T-y*M+f*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=t[9],h=t[10],d=t[11],g=t[12],y=t[13],f=t[14],p=t[15],S=e*o-n*a,w=e*l-s*a,T=e*c-r*a,A=n*l-s*o,M=n*c-r*o,_=s*c-r*l,b=u*y-m*g,F=u*f-h*g,I=u*p-d*g,D=m*f-h*y,B=m*p-d*y,X=h*p-d*f,P=S*X-w*B+T*D+A*I-M*F+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return t[0]=(o*X-l*B+c*D)*V,t[1]=(s*B-n*X-r*D)*V,t[2]=(y*_-f*M+p*A)*V,t[3]=(h*M-m*_-d*A)*V,t[4]=(l*I-a*X-c*F)*V,t[5]=(e*X-s*I+r*F)*V,t[6]=(f*T-g*_-p*w)*V,t[7]=(u*_-h*T+d*w)*V,t[8]=(a*B-o*I+c*b)*V,t[9]=(n*I-e*B-r*b)*V,t[10]=(g*M-y*T+p*S)*V,t[11]=(m*T-u*M-d*S)*V,t[12]=(o*F-a*D-l*b)*V,t[13]=(e*D-n*F+s*b)*V,t[14]=(y*w-g*A-f*S)*V,t[15]=(u*A-m*w+h*S)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,m=o+o,h=r*c,d=r*u,g=r*m,y=a*u,f=a*m,p=o*m,S=l*c,w=l*u,T=l*m,A=n.x,M=n.y,_=n.z;return s[0]=(1-(y+p))*A,s[1]=(d+T)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(d-T)*M,s[5]=(1-(h+p))*M,s[6]=(f+S)*M,s[7]=0,s[8]=(g+w)*_,s[9]=(f-S)*_,s[10]=(1-(h+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ci.set(s[0],s[1],s[2]).length(),o=Ci.set(s[4],s[5],s[6]).length(),l=Ci.set(s[8],s[9],s[10]).length();r<0&&(a=-a),rn.copy(this);let c=1/a,u=1/o,m=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=m,rn.elements[9]*=m,rn.elements[10]*=m,e.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Qe,l=!1){let c=this.elements,u=2*r/(e-t),m=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Qe)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===gs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Qe,l=!1){let c=this.elements,u=2/(e-t),m=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Qe)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===gs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ta.prototype.isMatrix4=!0;var oe=ta,Ci=new k,rn=new oe,Cu=new k(0,0,0),Pu=new k(1,1,1),Vn=new k,Qs=new k,Be=new k,hc=new oe,uc=new vn,Zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Iu=0,dc=new k,Pi=new vn,Rn=new oe,js=new k,cs=new k,Lu=new k,Du=new vn,fc=new k(1,0,0),pc=new k(0,1,0),mc=new k(0,0,1),gc={type:"added"},Nu={type:"removed"},Ii={type:"childadded",child:null},go={type:"childremoved",child:null},Ve=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Zn,n=new vn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Dt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(cs,js,this.up):Rn.lookAt(js,cs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nu),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Du,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),m=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new k(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uu={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let f=e.getJointPose(y,n),p=this._getHandJoint(c,y);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=u.position.distanceTo(m.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function _o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=bu(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_o(a,r,t+1/3),this.g=_o(a,r,t),this.b=_o(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Wt.workingToColorSpace(Pe.copy(this),t),Math.round(qt(Pe.r*255,0,255))*65536+Math.round(qt(Pe.g*255,0,255))*256+Math.round(qt(Pe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ke){Wt.workingToColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(tr);let n=ho(Hn.h,tr.h,e),s=ho(Hn.s,tr.s,e),r=ho(Hn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new Yt;Yt.NAMES=hh;var qi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},an=new k,Cn=new k,xo=new k,Pn=new k,Li=new k,Di=new k,_c=new k,vo=new k,yo=new k,So=new k,Mo=new le,bo=new le,Eo=new le,Yn=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Cn.subVectors(n,e),xo.subVectors(t,e);let a=an.dot(an),o=an.dot(Cn),l=an.dot(xo),c=Cn.dot(Cn),u=Cn.dot(xo),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let h=1/m,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Mo.setScalar(0),bo.setScalar(0),Eo.setScalar(0),Mo.fromBufferAttribute(t,e),bo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Mo,r.x),a.addScaledVector(bo,r.y),a.addScaledVector(Eo,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Cn.subVectors(t,e),an.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Li.subVectors(s,n),Di.subVectors(r,n),vo.subVectors(t,n);let l=Li.dot(vo),c=Di.dot(vo);if(l<=0&&c<=0)return e.copy(n);yo.subVectors(t,s);let u=Li.dot(yo),m=Di.dot(yo);if(u>=0&&m<=u)return e.copy(s);let h=l*m-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Li,a);So.subVectors(t,r);let d=Li.dot(So),g=Di.dot(So);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Di,o);let f=u*g-d*m;if(f<=0&&m-u>=0&&d-g>=0)return _c.subVectors(r,s),o=(m-u)/(m-u+(d-g)),e.copy(s).addScaledVector(_c,o);let p=1/(f+y+h);return a=y*p,o=h*p,e.copy(n).addScaledVector(Li,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),nr.subVectors(this.max,hs),Ni.subVectors(t.a,hs),Ui.subVectors(t.b,hs),Fi.subVectors(t.c,hs),Wn.subVectors(Ui,Ni),Xn.subVectors(Fi,Ui),oi.subVectors(Ni,Fi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-oi.z,oi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,oi.z,0,-oi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-oi.y,oi.x,0];return!To(e,Ni,Ui,Fi,nr)||(e=[1,0,0,0,1,0,0,0,1],!To(e,Ni,Ui,Fi,nr))?!1:(ir.crossVectors(Wn,Xn),e=[ir.x,ir.y,ir.z],To(e,Ni,Ui,Fi,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},In=[new k,new k,new k,new k,new k,new k,new k,new k],on=new k,er=new Jn,Ni=new k,Ui=new k,Fi=new k,Wn=new k,Xn=new k,oi=new k,hs=new k,nr=new k,ir=new k,li=new k;function To(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);let o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),u=n.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ue=new k,sr=new Xt,Fu=0,Se=class extends xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?dl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Eu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Tu(t,this.array)}};var ys=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ss=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var je=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ou=new Jn,us=new k,Ao=new k,fi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ou.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);let e=us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(Ao)),this.expandByPoint(us.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bu=0,Ke=new oe,wo=new Ve,Oi=new k,ze=new Jn,ds=new Jn,ye=new k,tn=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?Ss:ys)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ze.min,ds.min),ze.expandByPoint(ye),ye.addVectors(ze.max,ds.max),ze.expandByPoint(ye)):(ze.expandByPoint(ds.min),ze.expandByPoint(ds.max))}ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ye.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),ye.add(Oi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Se(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new k,l[F]=new k;let u=new k,m=new k,h=new k,d=new Xt,g=new Xt,y=new Xt,f=new k,p=new k;function S(F,I,D){c[F]=c[I]=c[D]=1,u.fromBufferAttribute(n,F),m.fromBufferAttribute(n,I),h.fromBufferAttribute(n,D),d.fromBufferAttribute(r,F),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,D),m.sub(u),h.sub(u),g.sub(d),y.sub(d);let B=1/(g.x*y.y-y.x*g.y);isFinite(B)&&(f.copy(m).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(B),p.copy(h).multiplyScalar(g.x).addScaledVector(m,-y.x).multiplyScalar(B),o[F].add(f),o[I].add(f),o[D].add(f),l[F].add(p),l[I].add(p),l[D].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,I=w.length;F<I;++F){let D=w[F],B=D.start,X=D.count;for(let P=B,V=B+X;P<V;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let T=new k,A=new k,M=new k,_=new k;function b(F){M.fromBufferAttribute(s,F),_.copy(M);let I=o[F];T.copy(I),T.sub(M.multiplyScalar(M.dot(I))).normalize(),A.crossVectors(_,I);let B=A.dot(l[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,B)}for(let F=0,I=n.count;F<I;++F)c[F]&&b(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,m=new k;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),y=t.getX(h+1),f=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,f),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,m=o.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Se(h,u,m)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,h=c.length;m<h;m++){let d=c[m];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],m=r[c];for(let h=0,d=m.length;h<d;h++)u.push(m[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ro=new k,zu=new k,ku=new Dt,ln=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ro.subVectors(n,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ro),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ku.getNormalMatrix(t),s=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gu=0,$n=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Ki,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Ho,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ln=new k,Co=new k,rr=new k,ar=new k,Ms=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Co.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(Co);let r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=ar.dot(this.direction),l=-ar.dot(rr),c=ar.lengthSq(),u=Math.abs(1-a*a),m,h,d,g;if(u>0)if(m=a*l-o,h=a*o-l,g=r*u,m>=0)if(h>=-g)if(h<=g){let y=1/u;m*=y,h*=y,d=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=r,m=Math.max(0,-(a*h+o)),d=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(a*h+o)),d=-m*m+h*(h+2*l)+c;else h<=-g?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-l),r),d=-m*m+h*(h+2*l)+c):h<=g?(m=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-l),r),d=-m*m+h*(h+2*l)+c);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),d=-m*m+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Co).addScaledVector(rr,h),d}intersectSphere(t,e){if(t.radius<0)return null;Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,f=e.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,T=Math.abs(l),A=Math.abs(c),M=Math.abs(u),_,b,F,I,D,B,X,P,V,Y,G,et;if(T>=A&&T>=M?(F=l,B=m,V=g,et=p,l>=0?(_=c,b=u,I=h,D=d,X=y,P=f,Y=S,G=w):(_=u,b=c,I=d,D=h,X=f,P=y,Y=w,G=S)):A>=M?(F=c,B=h,V=y,et=S,c>=0?(_=u,b=l,I=d,D=m,X=f,P=g,Y=w,G=p):(_=l,b=u,I=m,D=d,X=g,P=f,Y=p,G=w)):(F=u,B=d,V=f,et=w,u>=0?(_=l,b=c,I=m,D=h,X=g,P=y,Y=p,G=S):(_=c,b=l,I=h,D=m,X=y,P=g,Y=S,G=p)),F===0)return null;let W=_/F,Q=b/F,j=1/F,Mt=I-W*B,Ut=D-Q*B,J=X-W*V,mt=P-Q*V,vt=Y-W*et,Rt=G-Q*et,gt=vt*mt-Rt*J,Ot=Mt*Rt-Ut*vt,ce=J*Ut-mt*Mt;if(s){if(gt<0||Ot<0||ce<0)return null}else if((gt<0||Ot<0||ce<0)&&(gt>0||Ot>0||ce>0))return null;let Pt=gt+Ot+ce;if(Pt===0)return null;let Kt=j*(gt*B+Ot*V+ce*et);return(Pt>0?Kt<0:Kt>0)?null:this.at(Kt/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fr=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xc=new oe,ci=new Ms,or=new fi,vc=new k,lr=new k,cr=new k,hr=new k,Po=new k,ur=new k,yc=new k,dr=new k,He=class extends Ve{constructor(t=new tn,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(Po.fromBufferAttribute(m,t),a?ur.addScaledVector(Po,u):ur.addScaledVector(Po.sub(e),u))}e.add(ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(or.containsPoint(ci.origin)===!1&&(ci.intersectSphere(or,vc)===null||ci.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(xc.copy(r).invert(),ci.copy(t.ray).applyMatrix4(xc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],p=a[f.materialIndex],S=Math.max(f.start,d.start),w=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let T=S,A=w;T<A;T+=3){let M=o.getX(T),_=o.getX(T+1),b=o.getX(T+2);s=fr(this,p,t,n,c,u,m,M,_,b),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let f=g,p=y;f<p;f+=3){let S=o.getX(f),w=o.getX(f+1),T=o.getX(f+2);s=fr(this,a,t,n,c,u,m,S,w,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],p=a[f.materialIndex],S=Math.max(f.start,d.start),w=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let T=S,A=w;T<A;T+=3){let M=T,_=T+1,b=T+2;s=fr(this,p,t,n,c,u,m,M,_,b),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let f=g,p=y;f<p;f+=3){let S=f,w=f+1,T=f+2;s=fr(this,a,t,n,c,u,m,S,w,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Vu(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ei,o),l===null)return null;dr.copy(o),dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:i}}function fr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,lr),i.getVertexPosition(l,cr),i.getVertexPosition(c,hr);let u=Vu(i,t,e,n,lr,cr,hr,yc);if(u){let m=new k;Yn.getBarycoord(yc,lr,cr,hr,m),s&&(u.uv=Yn.getInterpolatedAttribute(s,o,l,c,m,new Xt)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,l,c,m,new Xt)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,l,c,m,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new k,materialIndex:0};Yn.getNormal(lr,cr,hr,h.normal),u.face=h,u.barycoord=m}return u}var Or=class extends be{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Me,u=Me,m,h){super(null,a,o,l,c,u,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=new fi,Hu=new Xt(.5,.5),pr=new k,pi=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qe,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],h=r[6],d=r[7],g=r[8],y=r[9],f=r[10],p=r[11],S=r[12],w=r[13],T=r[14],A=r[15];if(s[0].setComponents(c-a,d-u,p-g,A-S).normalize(),s[1].setComponents(c+a,d+u,p+g,A+S).normalize(),s[2].setComponents(c+o,d+m,p+y,A+w).normalize(),s[3].setComponents(c-o,d-m,p-y,A-w).normalize(),n)s[4].setComponents(l,h,f,T).normalize(),s[5].setComponents(c-l,d-h,p-f,A-T).normalize();else if(s[4].setComponents(c-l,d-h,p-f,A-T).normalize(),e===Qe)s[5].setComponents(c+l,d+h,p+f,A+T).normalize();else if(e===gs)s[5].setComponents(l,h,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);let e=Hu.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sc=new oe,Br=class i{constructor(){this.coordinateSystem=Qe,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Sc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new pi),n[s].setFromProjectionMatrix(Sc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new pi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var zr=class extends $n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mc=new oe,Uo=new Ms,mr=new fi,gr=new k,mi=class extends Ve{constructor(t=new tn,e=new zr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Mc.copy(s).invert(),Uo.copy(t.ray).applyMatrix4(Mc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,y=d;g<y;g++){let f=c.getX(g);gr.fromBufferAttribute(m,f),bc(gr,f,l,s,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(m.count,a.start+a.count);for(let g=h,y=d;g<y;g++)gr.fromBufferAttribute(m,g),bc(gr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bc(i,t,e,n,s,r,a){let o=Uo.distanceSqToPoint(i);if(o<e){let l=new k;Uo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var bs=class extends be{constructor(t=[],e=_i,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Es=class extends be{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Un=class extends be{constructor(t,e,n=hn,s,r,a,o=Me,l=Me,c,u=Nn,m=1){if(u!==Nn&&u!==On)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:m};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ts=class extends Un{constructor(t,e=hn,n=_i,s,r,a=Me,o=Me,l,c=Nn){let u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},As=class extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yi=class i extends tn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(m,2));function g(y,f,p,S,w,T,A,M,_,b,F){let I=T/_,D=A/b,B=T/2,X=A/2,P=M/2,V=_+1,Y=b+1,G=0,et=0,W=new k;for(let Q=0;Q<Y;Q++){let j=Q*D-X;for(let Mt=0;Mt<V;Mt++){let Ut=Mt*I-B;W[y]=Ut*S,W[f]=j*w,W[p]=P,c.push(W.x,W.y,W.z),W[y]=0,W[f]=0,W[p]=M>0?1:-1,u.push(W.x,W.y,W.z),m.push(Mt/_),m.push(1-Q/b),G+=1}}for(let Q=0;Q<b;Q++)for(let j=0;j<_;j++){let Mt=h+j+V*Q,Ut=h+j+V*(Q+1),J=h+(j+1)+V*(Q+1),mt=h+(j+1)+V*Q;l.push(Mt,Ut,mt),l.push(Ut,J,mt),et+=6}o.addGroup(d,et,F),d+=et,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Kn=class i extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=t/o,h=e/l,d=[],g=[],y=[],f=[];for(let p=0;p<u;p++){let S=p*h-a;for(let w=0;w<c;w++){let T=w*m-r;g.push(T,-S,0),y.push(0,0,1),f.push(w/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let w=S+c*p,T=S+c*(p+1),A=S+1+c*(p+1),M=S+1+c*p;d.push(w,T,M),d.push(T,A,M)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(y,3)),this.setAttribute("uv",new je(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ec(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ec(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Le(i){let t={};for(let e=0;e<i.length;e++){let n=vi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ec(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var uh={clone:vi,merge:Le},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Wu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kr=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Gr=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vr=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _r(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lo,endingEnd:Lo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Do:r=t,o=2*e-n;break;case No:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Do:a=t,l=2*n-e;break;case No:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,f=y*g,p=-h*f+2*h*y-h*g,S=(1+h)*f+(-1.5-2*h)*y+(-.5+h)*g+1,w=(-1-d)*f+(1.5+d)*y+.5*g,T=d*f-d*y;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+S*a[c+A]+w*a[l+A]+T*a[m+A];return r}},Wr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),m=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*m+a[l+h]*u;return r}},Xr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qr=class extends Qn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let g=(n-e)/(s-e),y=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*y+a[l+f]*g;return r}let h=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],f=a[l+g],p=d*h+g*2,S=m[p],w=m[p+1],T=t*h+g*2,A=u[T],M=u[T+1],_=Zu(n,e,S,A,s);r[g]=dh(_,y,w,M,f)}return r}};function dh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Yu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Zu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=dh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Yu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var We=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bi(e,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bi(t.times,Array),values:Bi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_r(t.settings)&&(n.settings={inTangents:Bi(t.settings.inTangents,Array),outTangents:Bi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case yr:e=this.InterpolantFactoryMethodSmooth;break;case Io:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return yr;case this.InterpolantFactoryMethodBezier:return Io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;_r(this.settings)&&(Tc(this.settings.inTangents,t),Tc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_r(this.settings)&&(Ac(this.settings.inTangents,t),Ac(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Mu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,h=m-n,d=m+n;for(let g=0;g!==n;++g){let y=e[m+g];if(y!==e[h+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[m+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Ac(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}We.prototype.ValueTypeName="";We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=Ir;var jn=class extends We{constructor(t,e,n){super(t,e,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=ps;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};Yr.prototype.ValueTypeName="color";var Zr=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="number";var Jr=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ws=class extends We{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Jr(this.times,this.values,this.getValueSize(),t)}};ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends We{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ps;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};$r.prototype.ValueTypeName="vector";var Kr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,h=c.length;m<h;m+=2){let d=c[m],g=c[m+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fh=new Kr,Qr=class{constructor(t){this.manager=t!==void 0?t:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=new k,vr=new vn,gn=new k,Rs=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xr,vr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,vr,gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xr,vr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,vr,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qn=new k,wc=new Xt,Rc=new Xt,Ge=class extends Rs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,wc,Rc),e.subVectors(Rc,wc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zi=class extends Rs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var zi=-90,ki=1,Ji=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(zi,ki,t,e);s.layers=this.layers,this.add(s);let r=new Ge(zi,ki,t,e);r.layers=this.layers,this.add(r);let a=new Ge(zi,ki,t,e);a.layers=this.layers,this.add(a);let o=new Ge(zi,ki,t,e);o.layers=this.layers,this.add(o);let l=new Ge(zi,ki,t,e);l.layers=this.layers,this.add(l);let c=new Ge(zi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qe)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(m,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jr=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var pl="\\[\\]\\.:\\/",Ju=new RegExp("["+pl+"]","g"),ml="[^"+pl+"]",$u="[^"+pl.replace("\\.","")+"]",Ku=/((?:WC+[\/:])*)/.source.replace("WC",ml),Qu=/(WCOD+)?/.source.replace("WCOD",$u),ju=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ml),td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ml),ed=new RegExp("^"+Ku+Qu+ju+td+"$"),nd=["material","materials","bones","map"],Fo=class{constructor(t,e,n){let s=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ju,"")}static parseTrackName(t){let e=ed.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ne.Composite=Fo;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E0=new Float32Array(1);var Sl=class Sl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Sl.prototype.isMatrix2=!0;var Oo=Sl;function gl(i,t,e,n){let s=id(n);switch(e){case il:return i*t;case rl:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case ni:return i*t*2/s.components*s.byteLength;case ha:return i*t*2/s.components*s.byteLength;case sl:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case ua:return i*t*4/s.components*s.byteLength;case Is:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(i,16)*Math.max(t,8)/4;case da:case pa:return Math.max(i,8)*Math.max(t,8)/2;case ga:case _a:case va:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:case Us:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fs:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function id(i){switch(i){case Xe:case jo:return{byteLength:1,components:1};case ts:case tl:case dn:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case hn:case aa:case un:return{byteLength:4,components:1};case el:case nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Uh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rd(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,m=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<m.length;d++){let g=m[h],y=m[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,m[h]=y)}m.length=h+1;for(let d=0,g=m.length;d<g;d++){let y=m[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:xd,iridescence_fragment:vd,bumpmap_pars_fragment:yd,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Ed,color_fragment:Td,color_pars_fragment:Ad,color_pars_vertex:wd,color_vertex:Rd,common:Cd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Id,displacementmap_vertex:Ld,emissivemap_fragment:Dd,emissivemap_pars_fragment:Nd,colorspace_fragment:Ud,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Kd,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Hd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:Yd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:Jd,lights_pars_begin:$d,lights_toon_fragment:Qd,lights_toon_pars_fragment:jd,lights_phong_fragment:tf,lights_phong_pars_fragment:ef,lights_physical_fragment:nf,lights_physical_pars_fragment:sf,lights_fragment_begin:rf,lights_fragment_maps:af,lights_fragment_end:of,lightprobes_pars_fragment:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:xf,morphinstance_vertex:vf,morphcolor_vertex:yf,morphnormal_vertex:Sf,morphtarget_pars_vertex:Mf,morphtarget_vertex:bf,normal_fragment_begin:Ef,normal_fragment_maps:Tf,normal_pars_fragment:Af,normal_pars_vertex:wf,normal_vertex:Rf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Df,opaque_fragment:Nf,packing:Uf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:qf,skinning_pars_vertex:Yf,skinning_vertex:Zf,skinnormal_vertex:Jf,specularmap_fragment:$f,specularmap_pars_fragment:Kf,tonemapping_fragment:Qf,tonemapping_pars_fragment:jf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distance_vert:pp,distance_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:yp,meshbasic_frag:Sp,meshlambert_vert:Mp,meshlambert_frag:bp,meshmatcap_vert:Ep,meshmatcap_frag:Tp,meshnormal_vert:Ap,meshnormal_frag:wp,meshphong_vert:Rp,meshphong_frag:Cp,meshphysical_vert:Pp,meshphysical_frag:Ip,meshtoon_vert:Lp,meshtoon_frag:Dp,points_vert:Np,points_frag:Up,shadow_vert:Fp,shadow_frag:Op,sprite_vert:Bp,sprite_frag:zp},pt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},bn={basic:{uniforms:Le([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Le([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Le([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Le([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Le([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Le([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Le([pt.points,pt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Le([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Le([pt.common,pt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Le([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Le([pt.sprite,pt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Le([pt.common,pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Le([pt.lights,pt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};bn.physical={uniforms:Le([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Va={r:0,b:0,g:0},kp=new oe,Fh=new Dt;Fh.set(-1,0,0,0,1,0,0,0,1);function Gp(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,u=null,m=0,h=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let T=S.backgroundBlurriness>0;w=t.get(w,T)}return w}function g(S){let w=!1,T=d(S);T===null?f(a,o):T&&T.isColor&&(f(T,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){let T=d(w);T&&T.isCubeTexture?(c===void 0&&(c=new He(new Yi(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:vi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,M,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(w.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fh),c.material.toneMapped=Wt.getTransfer(T.colorSpace)!==$t,(u!==T||m!==T.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,m=T.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new He(new Kn(2,2),new Ie({name:"BackgroundMaterial",uniforms:vi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(T.colorSpace)!==$t,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||m!==T.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,m=T.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,w){S.getRGB(Va,fl(i)),e.buffers.color.setClear(Va.r,Va.g,Va.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:g,addToRenderList:y,dispose:p}}function Vp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,B,X,P,V){let Y=!1,G=m(D,P,X,B);r!==G&&(r=G,c(r.object)),Y=d(D,P,X,V),Y&&g(D,P,X,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,T(D,B,X,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function m(D,B,X,P){let V=P.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let G=D.isInstancedMesh===!0?D.id:0,et=Y[G];et===void 0&&(et={},Y[G]=et);let W=et[X.id];W===void 0&&(W={},et[X.id]=W);let Q=W[V];return Q===void 0&&(Q=h(l()),W[V]=Q),Q}function h(D){let B=[],X=[],P=[];for(let V=0;V<e;V++)B[V]=0,X[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,B,X,P){let V=r.attributes,Y=B.attributes,G=0,et=X.getAttributes();for(let W in et)if(et[W].location>=0){let j=V[W],Mt=Y[W];if(Mt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),j===void 0||j.attribute!==Mt||Mt&&j.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function g(D,B,X,P){let V={},Y=B.attributes,G=0,et=X.getAttributes();for(let W in et)if(et[W].location>=0){let j=Y[W];j===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let Mt={};Mt.attribute=j,j&&j.data&&(Mt.data=j.data),V[W]=Mt,G++}r.attributes=V,r.attributesNum=G,r.index=P}function y(){let D=r.newAttributes;for(let B=0,X=D.length;B<X;B++)D[B]=0}function f(D){p(D,0)}function p(D,B){let X=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;X[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),V[D]!==B&&(i.vertexAttribDivisor(D,B),V[D]=B)}function S(){let D=r.newAttributes,B=r.enabledAttributes;for(let X=0,P=B.length;X<P;X++)B[X]!==D[X]&&(i.disableVertexAttribArray(X),B[X]=0)}function w(D,B,X,P,V,Y,G){G===!0?i.vertexAttribIPointer(D,B,X,V,Y):i.vertexAttribPointer(D,B,X,P,V,Y)}function T(D,B,X,P){y();let V=P.attributes,Y=X.getAttributes(),G=B.defaultAttributeValues;for(let et in Y){let W=Y[et];if(W.location>=0){let Q=V[et];if(Q===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let j=Q.normalized,Mt=Q.itemSize,Ut=t.get(Q);if(Ut===void 0)continue;let J=Ut.buffer,mt=Ut.type,vt=Ut.bytesPerElement,Rt=mt===i.INT||mt===i.UNSIGNED_INT||Q.gpuType===aa;if(Q.isInterleavedBufferAttribute){let gt=Q.data,Ot=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,ce=Q.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Pt=0;Pt<W.locationSize;Pt++)p(W.location+Pt,gt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)f(W.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Pt=0;Pt<W.locationSize;Pt++)w(W.location+Pt,Mt/W.locationSize,mt,j,Ot*vt,(ce+Mt/W.locationSize*Pt)*vt,Rt)}else{if(Q.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let gt=0;gt<W.locationSize;gt++)f(W.location+gt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let gt=0;gt<W.locationSize;gt++)w(W.location+gt,Mt/W.locationSize,mt,j,Mt*vt,Mt/W.locationSize*gt*vt,Rt)}}else if(G!==void 0){let j=G[et];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(W.location,j);break;case 3:i.vertexAttrib3fv(W.location,j);break;case 4:i.vertexAttrib4fv(W.location,j);break;default:i.vertexAttrib1fv(W.location,j)}}}}S()}function A(){F();for(let D in n){let B=n[D];for(let X in B){let P=B[X];for(let V in P){let Y=P[V];for(let G in Y)u(Y[G].object),delete Y[G];delete P[V]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let B=n[D.id];for(let X in B){let P=B[X];for(let V in P){let Y=P[V];for(let G in Y)u(Y[G].object),delete Y[G];delete P[V]}}delete n[D.id]}function _(D){for(let B in n){let X=n[B];for(let P in X){let V=X[P];if(V[D.id]===void 0)continue;let Y=V[D.id];for(let G in Y)u(Y[G].object),delete Y[G];delete V[D.id]}}}function b(D){for(let B in n){let X=n[B],P=D.isInstancedMesh===!0?D.id:0,V=X[P];if(V!==void 0){for(let Y in V){let G=V[Y];for(let et in G)u(G[et].object),delete G[et];delete V[Y]}delete X[P],Object.keys(X).length===0&&delete n[B]}}}function F(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:f,disableUnusedAttributes:S}}function Hp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==fn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Xe&&_!==un&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(It("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:T,maxSamples:A,samples:M}}function Xp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ln,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let d=m.length!==0||h||n!==0||s;return s=h,n=m.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=u(m,h,0)},this.setState=function(m,h,d){let g=m.clippingPlanes,y=m.clipIntersection,f=m.clipShadows,p=i.get(m);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let S=r?0:n,w=S*4,T=p.clippingState||null;l.value=T,T=u(g,h,w,d);for(let A=0;A!==w;++A)T[A]=e[A];p.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,h,d,g){let y=m!==null?m.length:0,f=null;if(y!==0){if(f=l.value,g!==!0||f===null){let p=d+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let w=0,T=d;w!==y;++w,T+=4)a.copy(m[w]).applyMatrix4(S,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}var ks=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yi(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:gi});r.uniforms.tEquirect.value=e;let a=new He(s,r),o=e.minFilter;return e.minFilter===cn&&(e.minFilter=de),new Ji(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ph=256,qp=3,Yp=20,Oh=256,Bh=16,Zp=3,Jp=new k,$p=new Yt,Wa=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ji(1,10,null),this._boxMesh=new He(new Yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Jp}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor($p));let f=new Ji(n,s,u);return f.position.copy(o),f.update(l,t),l.autoClear=m,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=g,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ph,ch(t))}_fromTexture(t,e){t.mapping===_i||t.mapping===ji?this._setSize(t.image.length===0?ph:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=mh(t,!1,!1),n=Math.log2(t)-qp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===_i||t.mapping===ji?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Kp(),this._integrationMaterial=Qp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Bh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Zp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Oh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=jp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function mh(i,t,e){return new ks(i,{minFilter:cn,generateMipmaps:t,type:dn,colorSpace:di,depthBuffer:e})}function Gs(i,t,e){return new Ie({name:i,uniforms:t,vertexShader:kt.cube_vert,fragmentShader:e,side:Fe,blending:gi,depthTest:!1,depthWrite:!1})}function Kp(){return Gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Oh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qp(){return Gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jp(){return Gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gh(){return Gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _h(){return Gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===ia||d===sa)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new ks(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,g=d===ia||d===sa,y=d===_i||d===ji;if(g||y){let f=e.get(h),p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Wa(i)),f=g?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Wa(i)),f=g?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,d){return d===ia?h.mapping=_i:d===sa&&(h.mapping=ji),h}function l(h){let d=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function em(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function nm(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let f in g.attributes)t.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function u(g){let y=g.attributes;for(let f in y)t.update(y[f],i.ARRAY_BUFFER)}function m(g){let y=g.index,f=g.attributes.position,p=0;if(f===void 0)return;let S=y!==null?y.array.length:f.array.length/3-1,w=f.count>=65535?Ss:ys,T=new w(Math.ceil(S/3)*6,1),A=T.array;if(y!==null){let _=y.array;p=y.version;for(let b=0,F=0;b<S;b+=3){let I=_[b+0],D=_[b+1],B=_[b+2];A[F++]=I,A[F++]=D,A[F++]=D,A[F++]=B,A[F++]=B,A[F++]=I}}else{p=f.version;for(let _=0,b=0;_<S;_+=3){let F=_+0,I=_+1,D=_+2;A[b++]=F,A[b++]=I,A[b++]=I,A[b++]=D,A[b++]=D,A[b++]=F}}T.version=p;let M=r.get(g);M&&t.remove(M),r.set(g,T)}function h(g){let y=r.get(g);if(y){let f=g.index;f!==null&&y.version<f.version&&m(g)}else m(g);return r.get(g)}function d(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function im(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,h){i.drawElements(n,h,r,m*a),e.update(h,n,1)}function c(m,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,m*a,d),e.update(h,n,d))}function u(m,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,d);let y=0;for(let f=0;f<d;f++)y+=h[f];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rm(i,t,e){let n=new WeakMap,s=new le;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==m){let F=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let T=o.attributes.position.count*w,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let M=new Float32Array(T*A*4*m),_=new xs(M,T,A,m);_.type=un,_.needsUpdate=!0;let b=w*4;for(let I=0;I<m;I++){let D=f[I],B=p[I],X=S[I],P=T*A*4*I;for(let V=0;V<D.count;V++){let Y=V*b;d===!0&&(s.fromBufferAttribute(D,V),M[P+Y+0]=s.x,M[P+Y+1]=s.y,M[P+Y+2]=s.z,M[P+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,V),M[P+Y+4]=s.x,M[P+Y+5]=s.y,M[P+Y+6]=s.z,M[P+Y+7]=0),y===!0&&(s.fromBufferAttribute(X,V),M[P+Y+8]=s.x,M[P+Y+9]=s.y,M[P+Y+10]=s.z,M[P+Y+11]=X.itemSize===4?s.w:1)}}h={count:m,texture:_,size:new Xt(T,A)},n.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function am(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,h=t.get(c,m);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var om={[Xo]:"LINEAR_TONE_MAPPING",[qo]:"REINHARD_TONE_MAPPING",[Yo]:"CINEON_TONE_MAPPING",[Zo]:"ACES_FILMIC_TONE_MAPPING",[$o]:"AGX_TONE_MAPPING",[Ko]:"NEUTRAL_TONE_MAPPING",[Jo]:"CUSTOM_TONE_MAPPING"};function lm(i,t,e,n,s,r){let a=new Ue(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new tn;u.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new je([0,2,0,0,2,0],2));let m=new kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new He(u,m),d=new Zi(-1,1,1,-1,0,1),g=null,y=null,f=!1,p,S=null,w=[],T=!1;this.setSize=function(A,M){a.setSize(A,M),o!==null&&o.setSize(A,M),l!==null&&l.setSize(A,M);for(let _=0;_<w.length;_++){let b=w[_];b.setSize&&b.setSize(A,M)}},this.setEffects=function(A){w=A,T=w.length>0&&w[0].isRenderPass===!0;let M=a.width,_=a.height;w.length>0&&o===null&&(o=new Ue(M,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new Ue(M,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(F=>F.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Un(M,_),r===!0&&(c.format=On,c.type=xi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let F=0;F<w.length;F++){let I=w[F];I.setSize&&I.setSize(M,_),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,M){if(f||A.toneMapping===Sn&&w.length===0)return!1;if(S=M,M!==null){let _=M.width,b=M.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return T===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Sn,!0},this.hasRenderPass=function(){return T},this.end=function(A,M){A.toneMapping=p,f=!0;let _=a,b=o;for(let F=0;F<w.length;F++){let I=w[F];I.enabled!==!1&&(I.render(A,b,_,M),I.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,m.defines={},Wt.getTransfer(g)===$t&&(m.defines.SRGB_TRANSFER="");let F=om[y];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(S),A.render(h,d),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),m.dispose()}}var zh=new be,kh=new Un(1,1),Gh=new Ts(1),Vh=new xs,Hh=new Ur,Wh=new bs,xh=[],vh=[],yh=new Float32Array(16),Sh=new Float32Array(9),Mh=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qa(i,t){let e=vh[t];e===void 0&&(e=new Int32Array(t),vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function fm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Mh.set(n),i.uniformMatrix2fv(this.addr,!1,Mh),ge(e,n)}}function pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),ge(e,n)}}function mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;yh.set(n),i.uniformMatrix4fv(this.addr,!1,yh),ge(e,n)}}function gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Ya(i){return i.version===0&&(i.compareFunction=cl,i.needsUpdate=!0),i}function Em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ya(kh):r=zh,e.setTexture2D(t||r,s)}function Tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hh,s)}function Am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ya(Gh):r=Wh,e.setTextureCube(t||r,s)}function wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vh,s)}function Rm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return Sm;case 36295:return Mm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return wm}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Im(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Lm(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Dm(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nm(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Um(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Gm(i,t){i.uniform2uiv(this.addr,t)}function Vm(i,t){i.uniform3uiv(this.addr,t)}function Hm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ya(kh):a=zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Xm(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hh,r[a])}function qm(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ya(Gh):a=Wh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ym(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vh,r[a])}function Zm(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Dm;case 35675:return Nm;case 35676:return Um;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return km;case 36294:return Gm;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}},Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}},Al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),a=Ml.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bh(e,c===void 0?new El(o,i,t):new Tl(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Al(o),bh(e,m)),e=m}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Jm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Eh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $m=37297,Km=0;function Qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Th=new Dt;function jm(i){Wt._getMatrix(Th,Wt.workingColorSpace,i);let t=`mat3( ${Th.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case ms:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ah(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Qm(i.getShaderSource(t),o)}else return r}function tg(i,t){let e=jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var eg={[Xo]:"Linear",[qo]:"Reinhard",[Yo]:"Cineon",[Zo]:"ACESFilmic",[$o]:"AgX",[Ko]:"Neutral",[Jo]:"Custom"};function ng(i,t){let e=eg[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ha=new k;function ig(){Wt.getLuminanceCoefficients(Ha);let i=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zs(i){return i!==""}function wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var og=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(og,lg)}function lg(i,t){let e=kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return wl(e)}var cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(cg,hg)}function hg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ug={[Cs]:"SHADOWMAP_TYPE_PCF",[$i]:"SHADOWMAP_TYPE_VSM"};function dg(i){return ug[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fg={[ji]:"ENVMAP_MODE_REFRACTION"};function pg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mg={[Wo]:"ENVMAP_BLENDING_MULTIPLY",[Yc]:"ENVMAP_BLENDING_MIX",[Zc]:"ENVMAP_BLENDING_ADD"};function gg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mg[i.combine]||"ENVMAP_BLENDING_NONE"}function _g(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=pg(e),m=gg(e),h=sg(e),d=rg(r),g=s.createProgram(),y,f,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(zs).join(`
`),y.length>0&&(y+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(zs).join(`
`),f.length>0&&(f+=`
`)):(y=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),f=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,tg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),a=wl(a),a=wh(a,e),a=Rh(a,e),o=wl(o),o=wh(o,e),o=Rh(o,e),a=Ch(a),o=Ch(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,f=["#define varying in",e.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=p+y+a,w=p+f+o,T=Eh(s,s.VERTEX_SHADER,S),A=Eh(s,s.FRAGMENT_SHADER,w);s.attachShader(g,T),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function M(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(A)||"",P=D.trim(),V=B.trim(),Y=X.trim(),G=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,A);else{let W=Ah(s,T,"vertex"),Q=Ah(s,A,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+W+`
`+Q)}else P!==""?It("WebGLProgram: Program Info Log:",P):(V===""||Y==="")&&(et=!1);et&&(I.diagnostics={runnable:G,programLog:P,vertexShader:{log:V,prefix:y},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(T),s.deleteShader(A),_=new es(s,g),b=ag(s,g)}let _;this.getUniforms=function(){return _===void 0&&M(this),_};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,$m)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Km++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}var xg=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function vg(i){return i===ni||i===Us||i===Fs}function yg(i,t,e,n,s,r){let a=new vs,o=new Rl,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,F,I,D,B){let X=I.fog,P=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||V,Y),et=h[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&It("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=Q!==void 0?Q.length:0,Mt=0;P.morphAttributes.position!==void 0&&(Mt=1),P.morphAttributes.normal!==void 0&&(Mt=2),P.morphAttributes.color!==void 0&&(Mt=3);let Ut,J,mt,vt;if(et){let ft=bn[et];Ut=ft.vertexShader,J=ft.fragmentShader}else{Ut=_.vertexShader,J=_.fragmentShader;let ft=o.getVertexShaderStage(_),Qt=o.getFragmentShaderStage(_);o.update(_,ft,Qt),mt=ft.id,vt=Qt.id}let Rt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ot=D.isInstancedMesh===!0,ce=D.isBatchedMesh===!0,Pt=!!_.map,Kt=!!_.matcap,jt=!!G,Gt=jt&&G.isPMREMTexture===!0,Ee=!!_.aoMap,fe=!!_.lightMap,Oe=!!_.bumpMap&&_.wireframe===!1,re=!!_.normalMap,mn=!!_.displacementMap,_e=!!_.emissiveMap,Ye=!!_.metalnessMap,Ze=!!_.roughnessMap,Je=_.anisotropy>0,L=_.clearcoat>0,$e=_.diffuseRoughness>0,ie=_.dispersion>0,se=_.retroreflectivity>0,dt=_.iridescence>0,pe=_.sheen>0,Ct=_.transmission>0,Nt=Je&&!!_.anisotropyMap,E=L&&!!_.clearcoatMap,x=L&&!!_.clearcoatNormalMap,U=L&&!!_.clearcoatRoughnessMap,tt=$e&&!!_.diffuseRoughnessMap,K=dt&&!!_.iridescenceMap,rt=dt&&!!_.iridescenceThicknessMap,ht=pe&&!!_.sheenColorMap,q=pe&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ot=!!_.specularColorMap,R=!!_.specularIntensityMap,$=Ct&&!!_.transmissionMap,H=Ct&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,at=_.alphaTest>0,Et=!!_.alphaHash,zt=!!_.extensions,it=Sn;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(it=i.toneMapping);let Tt=Gt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Bt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:J,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:ce,batchingColor:ce&&D._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&D.instanceColor!==null,instancingMorph:Ot&&D.morphTexture!==null,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pt,matcap:Kt,envMap:jt,envMapMode:jt&&G.mapping,envMapPMREM:Gt,envMapMaxLod:Gt?Tt.length-1:null,envMapSize:Gt?Tt[0].width:null,aoMap:Ee,lightMap:fe,bumpMap:Oe,normalMap:re,displacementMap:mn,emissiveMap:_e,normalMapObjectSpace:re&&_.normalMapType===Kc,normalMapTangentSpace:re&&_.normalMapType===al,packedNormalMap:re&&_.normalMapType===al&&vg(_.normalMap.format),metalnessMap:Ye,roughnessMap:Ze,anisotropy:Je,anisotropyMap:Nt,clearcoat:L,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:$e,diffuseRoughnessMap:tt,dispersion:ie,retroreflection:se,iridescence:dt,iridescenceMap:K,iridescenceThicknessMap:rt,sheen:pe,sheenColorMap:ht,sheenRoughnessMap:q,specularMap:Z,specularColorMap:ot,specularIntensityMap:R,transmission:Ct,transmissionMap:$,thicknessMap:H,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Ki&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Et,combine:_.combine,mapUv:Pt&&d(_.map.channel),aoMapUv:Ee&&d(_.aoMap.channel),lightMapUv:fe&&d(_.lightMap.channel),bumpMapUv:Oe&&d(_.bumpMap.channel),normalMapUv:re&&d(_.normalMap.channel),displacementMapUv:mn&&d(_.displacementMap.channel),emissiveMapUv:_e&&d(_.emissiveMap.channel),metalnessMapUv:Ye&&d(_.metalnessMap.channel),roughnessMapUv:Ze&&d(_.roughnessMap.channel),anisotropyMapUv:Nt&&d(_.anisotropyMap.channel),clearcoatMapUv:E&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:tt&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(_.sheenRoughnessMap.channel),specularMapUv:Z&&d(_.specularMap.channel),specularColorMapUv:ot&&d(_.specularColorMap.channel),specularIntensityMapUv:R&&d(_.specularIntensityMap.channel),transmissionMapUv:$&&d(_.transmissionMap.channel),thicknessMapUv:H&&d(_.thicknessMap.channel),alphaMapUv:st&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(re||Je),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Pt||st),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:gt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(ft=>ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Pt&&_.map.isVideoTexture===!0&&Wt.getTransfer(_.map.colorSpace)===$t,decodeVideoTextureEmissive:_e&&_.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(_.emissiveMap.colorSpace)===$t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&_.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function y(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)b.push(F),b.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(f(b,_),p(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let b=h[_.type],F;if(b){let I=bn[b];F=uh.clone(I.uniforms)}else F=_.uniforms;return F}function w(_,b){let F=u.get(b);return F!==void 0?++F.usedTimes:(F=new _g(i,b,_,s),c.push(F),u.set(b,F)),F}function T(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function M(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:M}}function Sg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ih(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,y,f,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:f,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=f,S.group=p),t++,S}function l(h,d,g,y,f,p,S){S.reversedDepth===!0&&(f=-f);let w=o(h,d,g,y,f,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(h,d,g,y,f,p){let S=o(h,d,g,y,f,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,d){e.length>1&&e.sort(h||Mg),n.length>1&&n.sort(d||Ih),s.length>1&&s.sort(d||Ih)}function m(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lh,i.set(n,[a])):s>=r.length?(a=new Lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Yt};break;case"SpotLight":e={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ag=0;function wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rg(i){let t=new Eg,e=Tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new oe,a=new oe;function o(c){let u=0,m=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,y=0,f=0,p=0,S=0,w=0,T=0,A=0,M=0,_=0,b=0,F=0,I=0;c.sort(wg);for(let B=0,X=c.length;B<X;B++){let P=c[B],V=P.color,Y=P.intensity,G=P.distance,et=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ni?et=P.shadow.map.texture:et=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=V.r*Y,m+=V.g*Y,h+=V.b*Y;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],Y);I++}else if(P.isSunLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,j=e.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=et;let Mt=Q.getViewportCount();for(let Ut=0;Ut<Mt;Ut++)n.sunShadowMatrix[y+Ut]=Q.getMatrix(Ut),n.sunShadowCascade[y+Ut]=Q._cascadeData[Ut];y+=Mt,g++}n.sun[d]=W,d++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,j=e.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=P.shadow.matrix,A++}n.directional[f]=W,f++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(V).multiplyScalar(Y),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[S]=W;let Q=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&F++),n.spotLightMatrix[S]=Q.matrix,P.castShadow){let j=e.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=et,_++}S++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(V).multiplyScalar(Y),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=W,w++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Q=P.shadow,j=e.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=et,n.pointShadowMatrix[p]=P.shadow.matrix,M++}n.point[p]=W,p++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(Y),W.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[T]=W,T++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=h;let D=n.hash;(D.sunLength!==d||D.directionalLength!==f||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==w||D.hemiLength!==T||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=f,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=T,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=I,D.sunLength=d,D.directionalLength=f,D.pointLength=p,D.spotLength=S,D.rectAreaLength=w,D.hemiLength=T,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=I,n.version=Ag++)}function l(c,u){let m=0,h=0,d=0,g=0,y=0,f=0,p=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let T=c[S];if(T.isSunLight){let A=n.sun[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),m++}else if(T.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(T.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(T.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){let A=n.hemi[f];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:n}}function Dh(i){let t=new Rg(i),e=[],n=[],s=[];function r(m){u.camera=m,e.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){n.push(m)}function l(){t.setup(e),s.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function c(m){t.setupView(e,m)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Dh(i),t.set(s,[o])):r>=a.length?(o=new Dh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lg=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Dg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Nh=new oe,Bs=new k,bl=new k;function Ng(i,t,e){let n=new pi,s=new Xt,r=new Xt,a=new le,o=new Gr,l=new Vr,c={},u=e.maxTextureSize,m={[ei]:Fe,[Fe]:ei,[yn]:yn},h=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new He(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let p=this.type;this.render=function(M,_,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;this.type===Ic&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);let F=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=p!==this.type;X&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=M.length;P<V;P++){let Y=M[P],G=Y.shadow;if(G===void 0){It("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let et=G.getFrameExtents();s.multiply(et),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===$i){if(Y.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ue(s.x,s.y,{format:ni,type:dn,minFilter:de,magFilter:de,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new Un(s.x,s.y,un),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=Nn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Me,G.map.depthTexture.magFilter=Me}else Y.isPointLight?(G.map=new ks(s.x),G.map.depthTexture=new Ts(s.x,hn)):(G.map=new Ue(s.x,s.y),G.map.depthTexture=new Un(s.x,s.y,hn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=Nn,this.type===Cs?(G.map.depthTexture.compareFunction=W?ll:ol,G.map.depthTexture.minFilter=de,G.map.depthTexture.magFilter=de):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Me,G.map.depthTexture.magFilter=Me);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,b);let j=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Mt=0;Mt<Q;Mt++){let Ut=G.getCamera(Mt);if(Y.isPointLight){let J=G.camera,mt=G.matrix,vt=Y.distance||J.far;vt!==J.far&&(J.far=vt,J.updateProjectionMatrix()),Bs.setFromMatrixPosition(Y.matrixWorld),J.position.copy(Bs),bl.copy(J.position),bl.add(Lg[Mt]),J.up.copy(Dg[Mt]),J.lookAt(bl),J.updateMatrixWorld(),mt.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Nh.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Nh,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(G.map),i.clear());let J=G.getViewport(Mt);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),B.viewport(a)}n=G.getFrustum(Mt),T(_,b,Ut,Y,j,this.type)}G.isPointLightShadow!==!0&&this.type===$i&&S(G,b),G.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(F,I,D)};function S(M,_){let b=t.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ue(s.x,s.y,{format:ni,type:dn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(_,null,b,h,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(_,null,b,d,y,null)}function w(M,_,b,F){let I=null,D=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)I=D;else if(I=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=I.uuid,X=_.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let V=P[X];V===void 0&&(V=I.clone(),P[X]=V,_.addEventListener("dispose",A)),I=V}if(I.visible=_.visible,I.wireframe=_.wireframe,F===$i?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:m[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=i.properties.get(I);B.light=b}return I}function T(M,_,b,F,I,D){if(M.visible===!1)return;if(M.layers.test(I)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===$i)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let P=t.update(M),V=M.material;if(Array.isArray(V)){let Y=P.groups;for(let G=0,et=Y.length;G<et;G++){let W=Y[G],Q=V[W.materialIndex];if(Q&&Q.visible){let j=w(M,Q,F,D);M.onBeforeShadow(i,M,_,b,P,j,W),i.renderBufferDirect(b,null,P,j,M,W),M.onAfterShadow(i,M,_,b,P,j,W)}}}else if(V.visible){let Y=w(M,V,F,D);M.onBeforeShadow(i,M,_,b,P,Y,null),i.renderBufferDirect(b,null,P,Y,M,null),M.onAfterShadow(i,M,_,b,P,Y,null)}}let X=M.children;for(let P=0,V=X.length;P<V;P++)T(X[P],_,b,F,I,D)}function A(M){M.target.removeEventListener("dispose",A);for(let b in c){let F=c[b],I=M.target.uuid;I in F&&(F[I].dispose(),delete F[I])}}}function Ug(i,t){function e(){let R=!1,$=new le,H=null,lt=new le(0,0,0,0);return{setMask:function(st){H!==st&&!R&&(i.colorMask(st,st,st,st),H=st)},setLocked:function(st){R=st},setClear:function(st,at,Et,zt,it){it===!0&&(st*=zt,at*=zt,Et*=zt),$.set(st,at,Et,zt),lt.equals($)===!1&&(i.clearColor(st,at,Et,zt),lt.copy($))},reset:function(){R=!1,H=null,lt.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,H=null,lt=null,st=null;return{setReversed:function(at){if($!==at){let Et=t.get("EXT_clip_control");at?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),$=at;let zt=st;st=null,this.setClear(zt)}},getReversed:function(){return $},setTest:function(at){at?gt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(at){H!==at&&!R&&(i.depthMask(at),H=at)},setFunc:function(at){if($&&(at=lh[at]),lt!==at){switch(at){case Mr:i.depthFunc(i.NEVER);break;case br:i.depthFunc(i.ALWAYS);break;case Er:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Tr:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case wr:i.depthFunc(i.GREATER);break;case Rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=at}},setLocked:function(at){R=at},setClear:function(at){st!==at&&(st=at,$&&(at=1-at),i.clearDepth(at))},reset:function(){R=!1,H=null,lt=null,st=null,$=!1}}}function s(){let R=!1,$=null,H=null,lt=null,st=null,at=null,Et=null,zt=null,it=null;return{setTest:function(Tt){R||(Tt?gt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(Tt){$!==Tt&&!R&&(i.stencilMask(Tt),$=Tt)},setFunc:function(Tt,Bt,ft){(H!==Tt||lt!==Bt||st!==ft)&&(i.stencilFunc(Tt,Bt,ft),H=Tt,lt=Bt,st=ft)},setOp:function(Tt,Bt,ft){(at!==Tt||Et!==Bt||zt!==ft)&&(i.stencilOp(Tt,Bt,ft),at=Tt,Et=Bt,zt=ft)},setLocked:function(Tt){R=Tt},setClear:function(Tt){it!==Tt&&(i.clearStencil(Tt),it=Tt)},reset:function(){R=!1,$=null,H=null,lt=null,st=null,at=null,Et=null,zt=null,it=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},m={},h={},d=new WeakMap,g=[],y=null,f=!1,p=null,S=null,w=null,T=null,A=null,M=null,_=null,b=new Yt(0,0,0),F=0,I=!1,D=null,B=null,X=null,P=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,et=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=et>=2);let Q=null,j={},Mt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),J=new le().fromArray(Mt),mt=new le().fromArray(Ut);function vt(R,$,H,lt){let st=new Uint8Array(4),at=i.createTexture();i.bindTexture(R,at),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<H;Et++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D($+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return at}let Rt={};Rt[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(Vi),Oe(!1),re(Bo),gt(i.CULL_FACE),Ee(gi);function gt(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Ot(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function ce(R,$){return h[R]!==$?(i.bindFramebuffer(R,$),h[R]=$,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Pt(R,$){let H=g,lt=!1;if(R){H=d.get($),H===void 0&&(H=[],d.set($,H));let st=R.textures;if(H.length!==st.length||H[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Et=st.length;at<Et;at++)H[at]=i.COLOR_ATTACHMENT0+at;H.length=st.length,lt=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,lt=!0);lt&&i.drawBuffers(H)}function Kt(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let jt={[Fn]:i.FUNC_ADD,[Lc]:i.FUNC_SUBTRACT,[Dc]:i.FUNC_REVERSE_SUBTRACT};jt[Nc]=i.MIN,jt[Uc]=i.MAX;let Gt={[na]:i.ZERO,[Qi]:i.ONE,[Fc]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[Vc]:i.SRC_ALPHA_SATURATE,[kc]:i.DST_COLOR,[Bc]:i.DST_ALPHA,[Oc]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Gc]:i.ONE_MINUS_DST_COLOR,[zc]:i.ONE_MINUS_DST_ALPHA,[Hc]:i.CONSTANT_COLOR,[Wc]:i.ONE_MINUS_CONSTANT_COLOR,[Xc]:i.CONSTANT_ALPHA,[qc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(R,$,H,lt,st,at,Et,zt,it,Tt){if(R===gi){f===!0&&(Ot(i.BLEND),f=!1);return}if(f===!1&&(gt(i.BLEND),f=!0),R!==ea){if(R!==p||Tt!==I){if((S!==Fn||A!==Fn)&&(i.blendEquation(i.FUNC_ADD),S=Fn,A=Fn),Tt)switch(R){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Go:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Lt("WebGLState: Invalid blending: ",R);break}else switch(R){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Go:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",R);break}w=null,T=null,M=null,_=null,b.set(0,0,0),F=0,p=R,I=Tt}return}st=st||$,at=at||H,Et=Et||lt,($!==S||st!==A)&&(i.blendEquationSeparate(jt[$],jt[st]),S=$,A=st),(H!==w||lt!==T||at!==M||Et!==_)&&(i.blendFuncSeparate(Gt[H],Gt[lt],Gt[at],Gt[Et]),w=H,T=lt,M=at,_=Et),(zt.equals(b)===!1||it!==F)&&(i.blendColor(zt.r,zt.g,zt.b,it),b.copy(zt),F=it),p=R,I=!1}function fe(R,$){R.side===yn?Ot(i.CULL_FACE):gt(i.CULL_FACE);let H=R.side===Fe;$&&(H=!H),Oe(H),R.blending===Ki&&R.transparent===!1?Ee(gi):Ee(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let lt=R.stencilWrite;o.setTest(lt),lt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function re(R){R!==Cc?(gt(i.CULL_FACE),R!==B&&(R===Bo?i.cullFace(i.BACK):R===Pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),B=R}function mn(R){R!==X&&(G&&i.lineWidth(R),X=R)}function _e(R,$,H){R?(gt(i.POLYGON_OFFSET_FILL),(P!==$||V!==H)&&(P=$,V=H,a.getReversed()&&($=-$,H=-H),i.polygonOffset($,H))):Ot(i.POLYGON_OFFSET_FILL)}function Ye(R){R?gt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function Ze(R){R===void 0&&(R=i.TEXTURE0+Y-1),Q!==R&&(i.activeTexture(R),Q=R)}function Je(R,$,H){H===void 0&&(Q===null?H=i.TEXTURE0+Y-1:H=Q);let lt=j[H];lt===void 0&&(lt={type:void 0,texture:void 0},j[H]=lt),(lt.type!==R||lt.texture!==$)&&(Q!==H&&(i.activeTexture(H),Q=H),i.bindTexture(R,$||Rt[R]),lt.type=R,lt.texture=$)}function L(){let R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function se(){try{i.texSubImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function dt(){try{i.texSubImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function pe(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function Nt(){try{i.texStorage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function E(){try{i.texStorage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function U(){try{i.texImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function tt(R){return m[R]!==void 0?m[R]:i.getParameter(R)}function K(R,$){m[R]!==$&&(i.pixelStorei(R,$),m[R]=$)}function rt(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function ht(R){mt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),mt.copy(R))}function q(R,$){let H=c.get($);H===void 0&&(H=new WeakMap,c.set($,H));let lt=H.get(R);lt===void 0&&(lt=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,lt,lt),H.set(R,lt))}function Z(R,$,H){let st=c.get($).get(R);l[st]!==H&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,H),l[st]=H)}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},Q=null,j={},h={},l={},d=new WeakMap,g=[],y=null,f=!1,p=null,S=null,w=null,T=null,A=null,M=null,_=null,b=new Yt(0,0,0),F=0,I=!1,D=null,B=null,X=null,P=null,V=null,J.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Ot,bindFramebuffer:ce,drawBuffers:Pt,useProgram:Kt,setBlending:Ee,setMaterial:fe,setFlipSided:Oe,setCullFace:re,setLineWidth:mn,setPolygonOffset:_e,setScissorTest:Ye,activeTexture:Ze,bindTexture:Je,unbindTexture:L,compressedTexImage2D:$e,compressedTexImage3D:ie,texImage2D:x,texImage3D:U,pixelStorei:K,getParameter:tt,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:Nt,texStorage3D:E,texSubImage2D:se,texSubImage3D:dt,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ct,scissor:rt,viewport:ht,reset:ot}}function Fg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap,m=new Set,h,d=new WeakMap,g=new Set,y=new FinalizationRegistry(E=>g.delete(E)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,x){return f?new OffscreenCanvas(E,x):_s("canvas")}function S(E,x,U){let tt=1,K=Nt(E);if((K.width>U||K.height>U)&&(tt=U/Math.max(K.width,K.height)),tt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let rt=Math.floor(tt*K.width),ht=Math.floor(tt*K.height);h===void 0&&(h=p(rt,ht));let q=x?p(rt,ht):h;return q.width=rt,q.height=ht,q.getContext("2d").drawImage(E,0,0,rt,ht),It("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+rt+"x"+ht+")."),q}else return"data"in E&&It("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function w(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,x,U,tt,K,rt=!1){if(E!==null){if(i[E]!==void 0)return i[E];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ht;tt&&(ht=t.get("EXT_texture_norm16"),ht||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8),U===i.UNSIGNED_SHORT&&ht&&(q=ht.R16_EXT),U===i.SHORT&&ht&&(q=ht.R16_SNORM_EXT)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),x===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8),U===i.UNSIGNED_SHORT&&ht&&(q=ht.RG16_EXT),U===i.SHORT&&ht&&(q=ht.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_SHORT&&ht&&(q=ht.RGB16_EXT),U===i.SHORT&&ht&&(q=ht.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){let Z=rt?ms:Wt.getTransfer(K);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=Z===$t?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ht&&(q=ht.RGBA16_EXT),U===i.SHORT&&ht&&(q=ht.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(E,x){let U;return E?x===null||x===hn||x===xi?U=i.DEPTH24_STENCIL8:x===un?U=i.DEPTH32F_STENCIL8:x===ts&&(U=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hn||x===xi?U=i.DEPTH_COMPONENT24:x===un?U=i.DEPTH_COMPONENT32F:x===ts&&(U=i.DEPTH_COMPONENT16),U}function b(E,x){return w(E)===!0||E.isFramebufferTexture&&E.minFilter!==Me&&E.minFilter!==de?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function F(E){let x=new WeakRef(E);n.get(E).__ref=x,g.add(x),y.register(E,x,x)}function I(E){let x=n.get(E).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function D(E){X(E.target)}function B(E){P(E.target)}function X(E){E.removeEventListener("dispose",D),I(E),Y(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&m.delete(E)}function P(E){E.removeEventListener("dispose",B),I(E),et(E)}function V(){for(let E of g){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):X(x))}g.clear(),m.clear()}function Y(E){let x=n.get(E);if(x.__webglInit===void 0)return;let U=E.source,tt=d.get(U);if(tt){let K=tt[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&G(E),Object.keys(tt).length===0&&d.delete(U)}n.remove(E)}function G(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let U=E.source,tt=d.get(U);delete tt[x.__cacheKey],a.memory.textures--}function et(E){let x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let U=E.depthTexture;if(U&&U.renderTarget===E&&X(U),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let rt=0;rt<x.__webglFramebuffer[K].length;rt++)i.deleteFramebuffer(x.__webglFramebuffer[K][rt]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let tt=E.textures;for(let K=0,rt=tt.length;K<rt;K++){let ht=n.get(tt[K]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(tt[K])}n.remove(E)}let W=0;function Q(){W=0}function j(){return W}function Mt(E){W=E}function Ut(){let E=W;return E>=s.maxTextures&&It("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,E}function J(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function mt(E,x){let U=n.get(E);if(E.isVideoTexture&&pe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){let tt=E.image;if(tt===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(U,E,x);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function vt(E,x){let U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){fe(U,E,x);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function Rt(E,x){let U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){fe(U,E,x);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function gt(E,x){let U=n.get(E);if(E.version>0&&U.__version!==E.version){Oe(U,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}let Ot={[Cr]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},ce={[Me]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[de]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[cn]:i.LINEAR_MIPMAP_LINEAR},Pt={[jc]:i.NEVER,[cl]:i.ALWAYS,[th]:i.LESS,[ol]:i.LEQUAL,[eh]:i.EQUAL,[ll]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function Kt(E,x){if(x.type===un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===de||x.magFilter===ra||x.magFilter===Ps||x.magFilter===cn||x.minFilter===de||x.minFilter===ra||x.minFilter===Ps||x.minFilter===cn)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ot[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ot[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ot[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ce[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Me||x.minFilter!==Ps&&x.minFilter!==cn||x.type===un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(E,x){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D),F(x));let tt=x.source,K=d.get(tt);K===void 0&&(K={},d.set(tt,K));let rt=J(x);if(rt!==E.__cacheKey){K[rt]===void 0&&(K[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[rt].usedTimes++;let ht=K[E.__cacheKey];ht!==void 0&&(K[E.__cacheKey].usedTimes--,ht.usedTimes===0&&G(x)),E.__cacheKey=rt,E.__webglTexture=K[rt].texture}return U}function Gt(E,x,U){return Math.floor(Math.floor(E/U)/x)}function Ee(E,x,U,tt){let rt=E.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,tt,x.data);else{rt.sort((R,$)=>R.start-$.start);let ht=0;for(let R=1;R<rt.length;R++){let $=rt[ht],H=rt[R],lt=$.start+$.count,st=Gt(H.start,x.width,4),at=Gt($.start,x.width,4);H.start<=lt+1&&st===at&&Gt(H.start+H.count-1,x.width,4)===st?$.count=Math.max($.count,H.start+H.count-$.start):(++ht,rt[ht]=H)}rt.length=ht+1;let q=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,$=rt.length;R<$;R++){let H=rt[R],lt=Math.floor(H.start/4),st=Math.ceil(H.count/4),at=lt%x.width,Et=Math.floor(lt/x.width),zt=st,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(i.TEXTURE_2D,0,at,Et,zt,it,U,tt,x.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function fe(E,x,U){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);let K=jt(E,x),rt=x.source;e.bindTexture(tt,E.__webglTexture,i.TEXTURE0+U);let ht=n.get(rt);if(rt.version!==ht.__version||K===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=Wt.getPrimaries(Wt.workingColorSpace),Tt=x.colorSpace===en?null:Wt.getPrimaries(x.colorSpace),Bt=x.colorSpace===en||it===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=S(x.image,!1,s.maxTextureSize);Z=Ct(x,Z);let ot=r.convert(x.format,x.colorSpace),R=r.convert(x.type),$=M(x.internalFormat,ot,R,x.normalized,x.colorSpace,x.isVideoTexture);Kt(tt,x);let H,lt=x.mipmaps,st=x.isVideoTexture!==!0,at=ht.__version===void 0||K===!0,Et=rt.dataReady,zt=b(x,Z);if(x.isDepthTexture)$=_(x.format===On,x.type),at&&(st?e.texStorage2D(i.TEXTURE_2D,1,$,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ot,R,null));else if(x.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(i.TEXTURE_2D,zt,$,lt[0].width,lt[0].height);for(let it=0,Tt=lt.length;it<Tt;it++)H=lt[it],st?Et&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,H.width,H.height,ot,R,H.data):e.texImage2D(i.TEXTURE_2D,it,$,H.width,H.height,0,ot,R,H.data);x.generateMipmaps=!1}else st?(at&&e.texStorage2D(i.TEXTURE_2D,zt,$,Z.width,Z.height),Et&&Ee(x,Z,ot,R)):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ot,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,$,lt[0].width,lt[0].height,Z.depth);for(let it=0,Tt=lt.length;it<Tt;it++)if(H=lt[it],x.format!==fn)if(ot!==null)if(st){if(Et)if(x.layerUpdates.size>0){let Bt=gl(H.width,H.height,x.format,x.type);for(let ft of x.layerUpdates){let Qt=H.data.subarray(ft*Bt/H.data.BYTES_PER_ELEMENT,(ft+1)*Bt/H.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ft,H.width,H.height,1,ot,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,H.width,H.height,Z.depth,ot,H.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,$,H.width,H.height,Z.depth,0,H.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,H.width,H.height,Z.depth,ot,R,H.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,$,H.width,H.height,Z.depth,0,ot,R,H.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{st&&at&&e.texStorage2D(i.TEXTURE_2D,zt,$,lt[0].width,lt[0].height);for(let it=0,Tt=lt.length;it<Tt;it++)H=lt[it],x.format!==fn?ot!==null?st?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,H.width,H.height,ot,H.data):e.compressedTexImage2D(i.TEXTURE_2D,it,$,H.width,H.height,0,H.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Et&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,H.width,H.height,ot,R,H.data):e.texImage2D(i.TEXTURE_2D,it,$,H.width,H.height,0,ot,R,H.data)}else if(x.isDataArrayTexture)if(st){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,$,Z.width,Z.height,Z.depth),Et)if(x.layerUpdates.size>0){let it=gl(Z.width,Z.height,x.format,x.type);for(let Tt of x.layerUpdates){let Bt=Z.data.subarray(Tt*it/Z.data.BYTES_PER_ELEMENT,(Tt+1)*it/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,Z.width,Z.height,1,ot,R,Bt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ot,R,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,ot,R,Z.data);else if(x.isData3DTexture)st?(at&&e.texStorage3D(i.TEXTURE_3D,zt,$,Z.width,Z.height,Z.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ot,R,Z.data)):e.texImage3D(i.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,ot,R,Z.data);else if(x.isFramebufferTexture){if(at)if(st)e.texStorage2D(i.TEXTURE_2D,zt,$,Z.width,Z.height);else{let it=Z.width,Tt=Z.height;for(let Bt=0;Bt<zt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,$,it,Tt,0,ot,R,null),it>>=1,Tt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Z.parentNode!==it){it.appendChild(Z),m.add(x),it.onpaint=Tt=>{let Bt=Tt.changedElements;for(let ft of m)Bt.includes(ft.image)&&(ft.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Bt=i.RGBA,ft=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Bt,ft,Qt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){let it=Nt(lt[0]);e.texStorage2D(i.TEXTURE_2D,zt,$,it.width,it.height)}for(let it=0,Tt=lt.length;it<Tt;it++)H=lt[it],st?Et&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ot,R,H):e.texImage2D(i.TEXTURE_2D,it,$,ot,R,H);x.generateMipmaps=!1}else if(st){if(at){let it=Nt(Z);e.texStorage2D(i.TEXTURE_2D,zt,$,it.width,it.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,R,Z)}else e.texImage2D(i.TEXTURE_2D,0,$,ot,R,Z);w(x)&&x.mipmapsAutoUpdate===!0&&T(tt),ht.__version=rt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Oe(E,x,U){if(x.image.length!==6)return;let tt=jt(E,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);let rt=n.get(K);if(K.version!==rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+U);let ht=Wt.getPrimaries(Wt.workingColorSpace),q=x.colorSpace===en?null:Wt.getPrimaries(x.colorSpace),Z=x.colorSpace===en||ht===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ot=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,$=[];for(let ft=0;ft<6;ft++)!ot&&!R?$[ft]=S(x.image[ft],!0,s.maxCubemapSize):$[ft]=R?x.image[ft].image:x.image[ft],$[ft]=Ct(x,$[ft]);let H=$[0],lt=r.convert(x.format,x.colorSpace),st=r.convert(x.type),at=M(x.internalFormat,lt,st,x.normalized,x.colorSpace),Et=x.isVideoTexture!==!0,zt=rt.__version===void 0||tt===!0,it=K.dataReady,Tt=b(x,H);Kt(i.TEXTURE_CUBE_MAP,x);let Bt;if(x.isDepthTexture){if(at=_(x.format===On,x.type),zt)if(Et)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,at,H.width,H.height);else for(let ft=0;ft<6;ft++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,H.width,H.height,0,lt,st,null)}else if(ot){Et&&zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,at,H.width,H.height);for(let ft=0;ft<6;ft++){Bt=$[ft].mipmaps;for(let Qt=0;Qt<Bt.length;Qt++){let xe=Bt[Qt];x.format!==fn?lt!==null?Et?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt,0,0,xe.width,xe.height,lt,xe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt,at,xe.width,xe.height,0,xe.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt,0,0,xe.width,xe.height,lt,st,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt,at,xe.width,xe.height,0,lt,st,xe.data)}}}else{if(Bt=x.mipmaps,Et&&zt){Bt.length>0&&Tt++;let ft=Nt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,at,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(R){Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,$[ft].width,$[ft].height,lt,st,$[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,$[ft].width,$[ft].height,0,lt,st,$[ft].data);for(let Qt=0;Qt<Bt.length;Qt++){let kn=Bt[Qt].image[ft].image;Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt+1,0,0,kn.width,kn.height,lt,st,kn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt+1,at,kn.width,kn.height,0,lt,st,kn.data)}}else{Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,lt,st,$[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,lt,st,$[ft]);for(let Qt=0;Qt<Bt.length;Qt++){let xe=Bt[Qt];Et?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt+1,0,0,lt,st,xe.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Qt+1,at,lt,st,xe.image[ft])}}}w(x)&&x.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),rt.__version=K.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function re(E,x,U,tt,K,rt){let ht=r.convert(U.format,U.colorSpace),q=r.convert(U.type),Z=M(U.internalFormat,ht,q,U.normalized,U.colorSpace),ot=n.get(x),R=n.get(U);if(R.__renderTarget=x,!ot.__hasExternalTextures){let $=Math.max(1,x.width>>rt),H=Math.max(1,x.height>>rt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,rt,Z,$,H,x.depth,0,ht,q,null):e.texImage2D(K,rt,Z,$,H,0,ht,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,K,R.__webglTexture,0,se(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,K,R.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mn(E,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let tt=x.depthTexture,K=tt&&tt.isDepthTexture?tt.type:null,rt=_(x.stencilBuffer,K),ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(x),rt,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(x),rt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,rt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,E)}else{let tt=x.textures;for(let K=0;K<tt.length;K++){let rt=tt[K],ht=r.convert(rt.format,rt.colorSpace),q=r.convert(rt.type),Z=M(rt.internalFormat,ht,q,rt.normalized,rt.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(x),Z,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(E,x,U){let tt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let rt=tt?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||rt.width!==x.width||rt.height!==x.height)&&(rt.width=x.width,rt.height=x.height,x.depthTexture.needsUpdate=!0),tt?gt(x.depthTexture,0):mt(x.depthTexture,0);let ht=K.__webglTexture,q=se(x),Z=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,ot=x.depthTexture.format===On?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Nn)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Z,ht,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Z,ht,0);else if(x.depthTexture.format===On)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,Z,ht,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ot,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(E){let x=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let tt=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),tt){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,tt.removeEventListener("dispose",K)};tt.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=tt}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let tt=0;tt<6;tt++)_e(x.__webglFramebuffer[tt],E,tt);else E.texture.mipmaps.length>0?_e(x.__webglFramebuffer[0],E,0):_e(x.__webglFramebuffer,E,0);else if(U){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]===void 0)x.__webglDepthbuffer[tt]=i.createRenderbuffer(),mn(x.__webglDepthbuffer[tt],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,rt)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),mn(x.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(E,x,U){let tt=n.get(E);x!==void 0&&re(tt.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ye(E)}function Je(E){let x=E.texture,U=n.get(E),tt=n.get(x);E.addEventListener("dispose",B),F(E);let K=E.textures,rt=E.isWebGLCubeRenderTarget===!0,ht=K.length>1;if(ht||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,a.memory.textures++),rt){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let Z=0;Z<x.mipmaps.length;Z++)U.__webglFramebuffer[q][Z]=i.createFramebuffer()}else U.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)U.__webglFramebuffer[q]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ht)for(let q=0,Z=K.length;q<Z;q++){let ot=n.get(K[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&dt(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<K.length;q++){let Z=K[q];U.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[q]);let ot=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),$=M(Z.internalFormat,ot,R,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),H=se(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,H,$,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,U.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),mn(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)re(U.__webglFramebuffer[q][Z],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else re(U.__webglFramebuffer[q],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(x)?T(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let q=0,Z=K.length;q<Z;q++){let ot=K[q],R=n.get(ot),$=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),Kt($,ot),re(U.__webglFramebuffer,E,ot,i.COLOR_ATTACHMENT0+q,$,0),w(ot)&&T($)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,tt.__webglTexture),Kt(q,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)re(U.__webglFramebuffer[Z],E,x,i.COLOR_ATTACHMENT0,q,Z);else re(U.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,q,0);w(x)?T(q):x.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&Ye(E)}function L(E){let x=E.textures;for(let U=0,tt=x.length;U<tt;U++){let K=x[U];if(w(K)&&K.mipmapsAutoUpdate===!0){let rt=A(E),ht=n.get(K).__webglTexture;e.bindTexture(rt,ht),T(rt),e.unbindTexture()}}}let $e=[];function ie(E){if(E.samples>0){if(dt(E)===!1){let x=E.textures,U=E.width,tt=E.height,K=i.COLOR_BUFFER_BIT,rt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(E),q=x.length>1;if(q)for(let ot=0;ot<x.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let R=n.get(x[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,U,tt,0,0,U,tt,K,i.NEAREST),l===!0&&($e.length=0,$e.push(i.COLOR_ATTACHMENT0+ot),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&$e.push(rt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<x.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let R=n.get(x[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function se(E){return Math.min(s.maxSamples,E.samples)}function dt(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(E){let x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function Ct(E,x){let U=E.colorSpace,tt=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==di&&U!==en&&(Wt.getTransfer(U)===$t?(tt!==fn||K!==Xe)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",U)),x}function Nt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=Mt,this.setTexture2D=mt,this.setTexture2DArray=vt,this.setTexture3D=Rt,this.setTextureCube=gt,this.rebindTextures=Ze,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=re,this.useMultisampledRTT=dt,this.dispose=V}function Og(i,t){function e(n,s=en){let r,a=Wt.getTransfer(s);if(n===Xe)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===el)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jo)return i.BYTE;if(n===tl)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===hn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===il)return i.ALPHA;if(n===sl)return i.RGB;if(n===fn)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===On)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===Is||n===Ls||n===Ds||n===Ns)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===_a||n===xa||n===va||n===ya||n===Us||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===_a)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===va)return r.COMPRESSED_R11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Us)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ma||n===ba||n===Ea||n===Ta||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Fs||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new As(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ie({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,h=null,d=null,g=null,y=typeof XRWebGLBinding<"u",f=new Pl,p={},S=e.getContextAttributes(),w=null,T=null,A=[],M=[],_=new Xt,b=null,F=null,I=new Ge;I.viewport=new le;let D=new Ge;D.viewport=new le;let B=[I,D],X=new jr,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let mt=A[J];return mt===void 0&&(mt=new Xi,A[J]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(J){let mt=A[J];return mt===void 0&&(mt=new Xi,A[J]=mt),mt.getGripSpace()},this.getHand=function(J){let mt=A[J];return mt===void 0&&(mt=new Xi,A[J]=mt),mt.getHandSpace()};function Y(J){let mt=M.indexOf(J.inputSource);if(mt===-1)return;let vt=A[mt];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||a),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",et);for(let J=0;J<A.length;J++){let mt=M[J];mt!==null&&(M[J]=null,A[J].disconnect(mt))}P=null,V=null,f.reset();for(let J in p)delete p[J];if(t.setRenderTarget(w),d=null,h=null,m=null,s=null,T=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),F!==null){let J=F.camera;J.fov=F.fov,J.zoom=F.zoom,J.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Rt=null,gt=null;S.depth&&(gt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?On:Nn,Rt=S.stencil?xi:hn);let Ot={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new Ue(h.textureWidth,h.textureHeight,{format:fn,type:Xe,depthTexture:new Un(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ue(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function et(J){for(let mt=0;mt<J.removed.length;mt++){let vt=J.removed[mt],Rt=M.indexOf(vt);Rt>=0&&(M[Rt]=null,A[Rt].disconnect(vt))}for(let mt=0;mt<J.added.length;mt++){let vt=J.added[mt],Rt=M.indexOf(vt);if(Rt===-1){for(let Ot=0;Ot<A.length;Ot++)if(Ot>=M.length){M.push(vt),Rt=Ot;break}else if(M[Ot]===null){M[Ot]=vt,Rt=Ot;break}if(Rt===-1)break}let gt=A[Rt];gt&&gt.connect(vt)}}function W(J,mt){mt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(mt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let mt=J.near,vt=J.far;f.texture!==null&&(f.depthNear>0&&(mt=f.depthNear),f.depthFar>0&&(vt=f.depthFar)),X.near=D.near=I.near=mt,X.far=D.far=I.far=vt,(P!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,V=X.far),X.layers.mask=J.layers.mask|6,I.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let Rt=J.parent,gt=X.cameras;W(X,Rt);for(let Ot=0;Ot<gt.length;Ot++)W(gt[Ot],Rt);X.projectionMatrix.copy(I.projectionMatrix),X.projectionMatrixInverse.copy(I.projectionMatrixInverse),F===null&&J.isPerspectiveCamera&&(F={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,X,Rt)};function Q(J,mt,vt){vt===null?J.matrix.copy(mt.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(mt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Lr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(X)},this.getCameraTexture=function(J){return p[J]};let j=null;function Mt(J,mt){if(u=mt.getViewerPose(c||a),g=mt,u!==null){let vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let Rt=!1;vt.length!==X.cameras.length&&(X.cameras.length=0,Rt=!0);for(let Pt=0;Pt<vt.length;Pt++){let Kt=vt[Pt],jt=null;if(d!==null)jt=d.getViewport(Kt);else{let Ee=m.getViewSubImage(h,Kt);jt=Ee.viewport,Pt===0&&(t.setRenderTargetTextures(T,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(T))}let Gt=B[Pt];Gt===void 0&&(Gt=new Ge,Gt.layers.enable(Pt),Gt.viewport=new le,B[Pt]=Gt),Gt.matrix.fromArray(Kt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Kt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(jt.x,jt.y,jt.width,jt.height),Pt===0&&(X.matrix.copy(Gt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Rt===!0&&X.cameras.push(Gt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=n.getBinding();let Pt=m.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&f.init(Pt,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),m=n.getBinding();for(let Pt=0;Pt<vt.length;Pt++){let Kt=vt[Pt].camera;if(Kt){let jt=p[Kt];jt||(jt=new As,p[Kt]=jt);let Gt=m.getCameraImage(Kt);jt.sourceTexture=Gt}}}}for(let vt=0;vt<A.length;vt++){let Rt=M[vt],gt=A[vt];Rt!==null&&gt!==void 0&&gt.update(Rt,mt,c||a)}j&&j(J,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let Ut=new Uh;Ut.setAnimationLoop(Mt),this.setAnimationLoop=function(J){j=J},this.dispose=function(){}}},kg=new oe,Xh=new Dt;Xh.set(-1,0,0,0,1,0,0,0,1);function Gg(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,fl(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,S,w,T){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),m(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,T)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),y(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,S,w):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Fe&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Fe&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,T=S.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(T)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Xh),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,w){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=w*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function m(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,S){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){let S=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={};function a(S,w){let T=w.program;n.uniformBlockBinding(S,T,s[S.id])}function o(S,w){let T=s[S.id];T===void 0&&(g(S),T=l(S),s[S.id]=T,S.addEventListener("dispose",f));let A=w.program;n.updateUBOMapping(S,A);let M=t.render.frame;r[S.id]!==M&&(c(S),r[S.id]=M)}function l(S){let w=i.createBuffer(),T=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(S){let w=s[S.id],T=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let M=0,_=T.length;M<_;M++){let b=T[M];if(Array.isArray(b))for(let F=0,I=b.length;F<I;F++)u(b[F],M,F,A);else u(b,M,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,w,T,A){if(h(S,w,T,A)===!0){let M=S.__offset,_=S.value;if(Array.isArray(_)){let b=0;for(let F=0;F<_.length;F++){let I=_[F],D=y(I,!0);m(I,S.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,S.__data)}}function m(S,w,T){typeof S=="number"||typeof S=="boolean"?w[T]=S:S.isMatrix3?(w[T]=S.elements[0],w[T+1]=S.elements[1],w[T+2]=S.elements[2],w[T+3]=0,w[T+4]=S.elements[3],w[T+5]=S.elements[4],w[T+6]=S.elements[5],w[T+7]=0,w[T+8]=S.elements[6],w[T+9]=S.elements[7],w[T+10]=S.elements[8],w[T+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-T),T):S.toArray(w,T)}function h(S,w,T,A){let M=S.value,_=w+"_"+T;if(Array.isArray(M)){A[_]===void 0&&(A[_]=[]);let b=A[_],F=!1;for(let I=0;I<M.length;I++)d(M[I],b,I)===!0&&(F=!0);return F}return d(M,A,_)}function d(S,w,T){if(w[T]===void 0)return typeof S=="number"||typeof S=="boolean"?w[T]=S:ArrayBuffer.isView(S)?w[T]=S.slice():w[T]=S.clone(),!0;{let A=w[T];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){let w=S.uniforms,T=0,A=16;for(let _=0,b=w.length;_<b;_++){let F=Array.isArray(w[_])?w[_]:[w[_]];for(let I=0,D=F.length;I<D;I++){let B=F[I],X=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(w[_])||Array.isArray(B.value),V=T;for(let G=0,et=X.length;G<et;G++){let W=X[G],Q=y(W,P),j=T%A,Mt=j%Q.boundary,Ut=j+Mt;T+=Mt,Ut!==0&&A-Ut<Q.storage&&(T+=A-Ut),G===0&&(V=T),T+=Q.storage}let Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((T-V)/Float32Array.BYTES_PER_ELEMENT),B.__offset=V}}let M=T%A;return M>0&&(T+=A-M),S.__size=T,S.__cache={},this}function y(S,w){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=16,T.storage=48):S.isMatrix4?(T.boundary=16,T.storage=64):S.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):It("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function f(S){let w=S.target;w.removeEventListener("dispose",f),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:p}}var Hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mn=null;function Wg(){return Mn===null&&(Mn=new Or(Hg,16,16,ni,dn),Mn.name="DFG_LUT",Mn.minFilter=de,Mn.magFilter=de,Mn.wrapS=_n,Mn.wrapT=_n,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}var Xa=class{constructor(t={}){let{canvas:e=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Xe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,f=new Set([ua,ha,ca]),p=new Set([Xe,hn,ts,xi,oa,la]),S=new Uint32Array(4),w=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},A=null,M=null,_=[],b=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,B=null,X=null,P=null,V=null;this._outputColorSpace=ke;let Y=0,G=0,et=null,W=-1,Q=null,j=new le,Mt=new le,Ut=null,J=new Yt(0),mt=0,vt=e.width,Rt=e.height,gt=1,Ot=null,ce=null,Pt=new le(0,0,vt,Rt),Kt=new le(0,0,vt,Rt),jt=!1,Gt=new pi,Ee=new Br,fe=!1,Oe=!1,re=new oe,mn=new k,_e=new le,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Je(){return et===null?gt:1}let L=n;function $e(v,C){return e.getContext(v,C)}let ie,se,dt,pe,Ct,Nt,E,x,U,tt,K,rt,ht,q,Z,ot,R,$,H,lt,st,at,Et;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){let C="webgl2";if(L=$e(C,v),L===null)throw $e(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(v){throw e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Lt("WebGLRenderer: "+v.message),v}function zt(){ie=new em(L),ie.init(),st=new Og(L,ie),se=new Wp(L,ie,t,st),dt=new Ug(L,ie),se.reversedDepthBuffer&&h&&dt.buffers.depth.setReversed(!0),X=L.createFramebuffer(),P=L.createFramebuffer(),V=L.createFramebuffer(),pe=new sm(L),Ct=new Sg,Nt=new Fg(L,ie,dt,Ct,se,st,pe),E=new tm(I),x=new rd(L),at=new Vp(L,x),U=new nm(L,x,pe,at),tt=new am(L,U,x,at,pe),$=new rm(L,se,Nt),Z=new Xp(Ct),K=new yg(I,E,ie,se,at,Z),rt=new Gg(I,Ct),ht=new bg,q=new Cg(ie),R=new Gp(I,E,dt,tt,g,l),ot=new Ng(I,tt,se),Et=new Vg(L,pe,se,dt),H=new Hp(L,ie,pe),lt=new im(L,ie,pe),pe.programs=K.programs,I.capabilities=se,I.extensions=ie,I.properties=Ct,I.renderLists=ht,I.shadowMap=ot,I.state=dt,I.info=pe}y!==Xe&&(F=new lm(y,e.width,e.height,o,s,r));let it=new Il(I,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=ie.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ie.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(v){v!==void 0&&(gt=v,this.setSize(vt,Rt,!1))},this.getSize=function(v){return v.set(vt,Rt)},this.setSize=function(v,C,z=!0){if(it.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=v,Rt=C,e.width=Math.floor(v*gt),e.height=Math.floor(C*gt),z===!0&&(e.style.width=v+"px",e.style.height=C+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(vt*gt,Rt*gt).floor()},this.setDrawingBufferSize=function(v,C,z){vt=v,Rt=C,gt=z,e.width=Math.floor(v*z),e.height=Math.floor(C*z),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(y===Xe){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Pt)},this.setViewport=function(v,C,z,N){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,C,z,N),dt.viewport(j.copy(Pt).multiplyScalar(Je()).round())},this.getScissor=function(v){return v.copy(Kt)},this.setScissor=function(v,C,z,N){v.isVector4?Kt.set(v.x,v.y,v.z,v.w):Kt.set(v,C,z,N),dt.scissor(Mt.copy(Kt).multiplyScalar(Je()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(v){dt.setScissorTest(jt=v)},this.setOpaqueSort=function(v){Ot=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,z=!0){let N=0;if(v){let O=!1;if(et!==null){let ut=et.texture.format;O=f.has(ut)}if(O){let ut=et.texture.type,xt=p.has(ut),ct=R.getClearColor(),_t=R.getClearAlpha(),bt=ct.r,Ft=ct.g,Vt=ct.b;xt?(S[0]=bt,S[1]=Ft,S[2]=Vt,S[3]=_t,L.clearBufferuiv(L.COLOR,0,S)):(w[0]=bt,w[1]=Ft,w[2]=Vt,w[3]=_t,L.clearBufferiv(L.COLOR,0,w))}else N|=L.COLOR_BUFFER_BIT}C&&(N|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(N|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&L.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),R.dispose(),ht.dispose(),q.dispose(),Nt.dispose(),Ct.dispose(),E.dispose(),tt.dispose(),U.dispose(),at.dispose(),Et.dispose(),K.dispose(),it.dispose(),it.removeEventListener("sessionstart",$l),it.removeEventListener("sessionend",Kl),si.stop()};function Tt(v){v.preventDefault(),ul("WebGLRenderer: Context Lost."),D=!0}function Bt(){ul("WebGLRenderer: Context Restored."),D=!1;let v=pe.autoReset,C=ot.enabled,z=ot.autoUpdate,N=ot.needsUpdate,O=ot.type;zt(),pe.autoReset=v,ot.enabled=C,ot.autoUpdate=z,ot.needsUpdate=N,ot.type=O}function ft(v){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qt(v){let C=v.target;C.removeEventListener("dispose",Qt),xe(C)}function xe(v){kn(v),Ct.remove(v)}function kn(v){let C=Ct.get(v).programs;C!==void 0&&(C.forEach(function(z){K.releaseProgram(z)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,z,N,O,ut){C===null&&(C=Ye);let xt=O.isMesh&&O.matrixWorld.determinantAffine()<0,ct=xu(v,C,z,N,O);dt.setMaterial(N,xt);let _t=z.index,bt=1;if(N.wireframe===!0){if(_t=U.getWireframeAttribute(z),_t===void 0)return;bt=2}let Ft=z.drawRange,Vt=z.attributes.position,yt=Ft.start*bt,Ht=(Ft.start+Ft.count)*bt;ut!==null&&(yt=Math.max(yt,ut.start*bt),Ht=Math.min(Ht,(ut.start+ut.count)*bt)),_t!==null?(yt=Math.max(yt,0),Ht=Math.min(Ht,_t.count)):Vt!=null&&(yt=Math.max(yt,0),Ht=Math.min(Ht,Vt.count));let he=Ht-yt;if(he<0||he===1/0)return;at.setup(O,N,ct,z,_t);let ee,te=H;if(_t!==null&&(ee=x.get(_t),te=lt,te.setIndex(ee)),O.isMesh)N.wireframe===!0?(dt.setLineWidth(N.wireframeLinewidth*Je()),te.setMode(L.LINES)):te.setMode(L.TRIANGLES);else if(O.isLine){let we=N.linewidth;we===void 0&&(we=1),dt.setLineWidth(we*Je()),O.isLineSegments?te.setMode(L.LINES):O.isLineLoop?te.setMode(L.LINE_LOOP):te.setMode(L.LINE_STRIP)}else O.isPoints?te.setMode(L.POINTS):O.isSprite&&te.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))te.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let we=O._multiDrawStarts,St=O._multiDrawCounts,Ne=O._multiDrawCount,Jt=_t?x.get(_t).bytesPerElement:1,ri=Ct.get(N).currentProgram.getUniforms();for(let Re=0;Re<Ne;Re++)ri.setValue(L,"_gl_DrawID",Re),te.render(we[Re]/Jt,St[Re])}else if(O.isInstancedMesh)te.renderInstances(yt,he,O.count);else if(z.isInstancedBufferGeometry){let we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,St=Math.min(z.instanceCount,we);te.renderInstances(yt,he,St)}else te.render(yt,he)};function Jl(v,C,z,N){B!==null&&v.isNodeMaterial&&B.setObject(N,v),fe===!0&&Z.setState(v,z,!1),v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Fe,v.needsUpdate=!0,ls(v,C,N),v.side=ei,v.needsUpdate=!0,ls(v,C,N),v.side=yn):ls(v,C,N)}this.compile=function(v,C,z=null){z===null&&(z=v),B!==null&&B.renderStart(v,C,z),M=q.get(z),M.init(C),b.push(M),z.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),v!==z&&v.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),M.setupLights(),B!==null&&B.updateLights(M.state.lightsArray),Oe=this.localClippingEnabled,fe=Z.init(this.clippingPlanes,Oe),fe===!0&&Z.setGlobalState(this.clippingPlanes,C),B!==null&&ot.render(M.state.shadowsArray,z,C);let N=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ut=O.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){let ct=ut[xt];Jl(ct,z,C,O),N.add(ct)}else Jl(ut,z,C,O),N.add(ut)}),M=b.pop(),B!==null&&B.renderEnd(),N},this.compileAsync=function(v,C,z=null){let N=this.compile(v,C,z);return new Promise(O=>{function ut(){if(N.forEach(function(xt){let _t=Ct.get(xt).currentProgram;(_t===void 0||_t.isReady())&&N.delete(xt)}),N.size===0){O(v);return}setTimeout(ut,10)}ie.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let oo=null;function gu(v){oo&&oo(v)}function $l(){si.stop()}function Kl(){si.start()}let si=new Uh;si.setAnimationLoop(gu),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(v){oo=v,it.setAnimationLoop(v),v===null?si.stop():si.start()},it.addEventListener("sessionstart",$l),it.addEventListener("sessionend",Kl),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(v,C);let z=it.enabled===!0&&it.isPresenting===!0,N=F!==null&&(et===null||z)&&F.begin(I,et);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(C),C=it.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,C,et),M=q.get(v,b.length),M.init(C),M.state.textureUnits=Nt.getTextureUnits(),b.push(M),re.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?Ee.setFromArrayCamera(C):Gt.setFromProjectionMatrix(re,Qe,C.reversedDepth),Oe=this.localClippingEnabled,fe=Z.init(this.clippingPlanes,Oe),A=ht.get(v,_.length),A.init(),_.push(A),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let xt=I.xr.getDepthSensingMesh();xt!==null&&lo(xt,C,-1/0,I.sortObjects)}lo(v,C,0,I.sortObjects),A.finish(),B!==null&&B.updateLights(M.state.lightsArray),I.sortObjects===!0&&A.sort(Ot,ce),Ze=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ze&&R.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),fe===!0&&Z.beginShadows();let O=M.state.shadowsArray;if(ot.render(O,v,C),fe===!0&&Z.endShadows(),(N&&F.hasRenderPass())===!1){let xt=A.opaque,ct=A.transmissive;if(M.setupLights(),C.isArrayCamera){let _t=C.cameras;if(ct.length>0)for(let bt=0,Ft=_t.length;bt<Ft;bt++){let Vt=_t[bt];jl(xt,ct,v,Vt)}Ze&&R.render(v);for(let bt=0,Ft=_t.length;bt<Ft;bt++){let Vt=_t[bt];Ql(A,v,Vt,Vt.viewport)}}else ct.length>0&&jl(xt,ct,v,C),Ze&&R.render(v),Ql(A,v,C)}et!==null&&G===0&&(Nt.updateMultisampleRenderTarget(et),Nt.updateRenderTargetMipmap(et)),N&&F.end(I),v.isScene===!0&&v.onAfterRender(I,v,C),at.resetDefaultState(),W=-1,Q=null,b.pop(),b.length>0?(M=b[b.length-1],Nt.setTextureUnits(M.state.textureUnits),fe===!0&&Z.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function lo(v,C,z,N){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){let xt=C.isArrayCamera?Ee:Gt;if(!v.frustumCulled||v.intersectsFrustum(xt)){N&&_e.setFromMatrixPosition(v.matrixWorld).applyMatrix4(re);let ct=tt.update(v),_t=v.material;_t.visible&&A.push(v,ct,_t,z,_e.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){let xt=C.isArrayCamera?Ee:Gt;if(!v.frustumCulled||v.intersectsFrustum(xt)){let ct=tt.update(v),_t=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),_e.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),_e.copy(ct.boundingSphere.center)),_e.applyMatrix4(v.matrixWorld).applyMatrix4(re)),Array.isArray(_t)){let bt=ct.groups;for(let Ft=0,Vt=bt.length;Ft<Vt;Ft++){let yt=bt[Ft],Ht=_t[yt.materialIndex];Ht&&Ht.visible&&A.push(v,ct,Ht,z,_e.z,yt,C)}}else _t.visible&&A.push(v,ct,_t,z,_e.z,null,C)}}}let ut=v.children;for(let xt=0,ct=ut.length;xt<ct;xt++)lo(ut[xt],C,z,N)}function Ql(v,C,z,N){let{opaque:O,transmissive:ut,transparent:xt}=v;M.setupLightsView(z),fe===!0&&Z.setGlobalState(I.clippingPlanes,z),N&&dt.viewport(j.copy(N)),O.length>0&&$s(O,C,z),ut.length>0&&$s(ut,C,z),xt.length>0&&$s(xt,C,z),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function jl(v,C,z,N){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[N.id]===void 0){let yt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[N.id]=new Ue(1,1,{generateMipmaps:!0,type:yt?dn:Xe,minFilter:cn,samples:Math.max(4,se.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let ut=M.state.transmissionRenderTarget[N.id],xt=N.viewport||j;ut.setSize(xt.z*I.transmissionResolutionScale,xt.w*I.transmissionResolutionScale);let ct=I.getRenderTarget(),_t=I.getActiveCubeFace(),bt=I.getActiveMipmapLevel();I.setRenderTarget(ut),I.getClearColor(J),mt=I.getClearAlpha(),mt<1&&I.setClearColor(16777215,.5),I.clear(),Ze&&R.render(z);let Ft=I.toneMapping;I.toneMapping=Sn;let Vt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),M.setupLightsView(N),fe===!0&&Z.setGlobalState(I.clippingPlanes,N),$s(v,z,N),Nt.updateMultisampleRenderTarget(ut),Nt.updateRenderTargetMipmap(ut),ie.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Ht=0,he=C.length;Ht<he;Ht++){let ee=C[Ht],{object:te,geometry:we,material:St,group:Ne}=ee;if(St.side===yn&&te.layers.test(N.layers)){let Jt=St.side;St.side=Fe,St.needsUpdate=!0,tc(te,z,N,we,St,Ne),St.side=Jt,St.needsUpdate=!0,yt=!0}}yt===!0&&(Nt.updateMultisampleRenderTarget(ut),Nt.updateRenderTargetMipmap(ut))}I.setRenderTarget(ct,_t,bt),I.setClearColor(J,mt),Vt!==void 0&&(N.viewport=Vt),I.toneMapping=Ft}function $s(v,C,z){let N=C.isScene===!0?C.overrideMaterial:null;for(let O=0,ut=v.length;O<ut;O++){let xt=v[O],{object:ct,geometry:_t,group:bt}=xt,Ft=xt.material;Ft.allowOverride===!0&&N!==null&&(Ft=N),ct.layers.test(z.layers)&&tc(ct,C,z,_t,Ft,bt)}}function tc(v,C,z,N,O,ut){B!==null&&O.isNodeMaterial&&B.setObject(v,O),v.onBeforeRender(I,C,z,N,O,ut),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(I,C,z,N,v,ut),O.transparent===!0&&O.side===yn&&O.forceSinglePass===!1?(O.side=Fe,O.needsUpdate=!0,I.renderBufferDirect(z,C,N,O,v,ut),O.side=ei,O.needsUpdate=!0,I.renderBufferDirect(z,C,N,O,v,ut),O.side=yn):I.renderBufferDirect(z,C,N,O,v,ut),v.onAfterRender(I,C,z,N,O,ut)}function ec(v){let C=0;for(let z of v)z.texture!==null&&C++;return C}function ls(v,C,z){C.isScene!==!0&&(C=Ye);let N=Ct.get(v),O=M.state.lights,ut=M.state.shadowsArray,xt=O.state.version,ct=K.getParameters(v,O.state,ut,C,z,M.state.lightProbeGridArray),_t=K.getProgramCacheKey(ct),bt=N.programs;N.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,N.fog=C.fog;let Ft=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;N.envMap=E.get(v.envMap||N.environment,Ft),N.envMapRotation=N.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",Qt),bt=new Map,N.programs=bt,N.programVariants=new Map);let Vt=bt.get(_t);if(Vt!==void 0){if(N.currentProgram===Vt&&N.lightsStateVersion===xt)return ic(v,ct),Vt}else ct.uniforms=K.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,z,ct),v.onBeforeCompile(ct,I),Vt=K.acquireProgram(ct,_t),bt.set(_t,Vt),N.uniforms=ct.uniforms;let yt=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=Z.uniform),ic(v,ct),N.needsLights=yu(v),N.lightsStateVersion=xt,N.needsLights&&(yt.ambientLightColor.value=O.state.ambient,yt.lightProbe.value=O.state.probe,yt.sunLights.value=O.state.sun,yt.sunLightShadows.value=O.state.sunShadow,yt.directionalLights.value=O.state.directional,yt.directionalLightShadows.value=O.state.directionalShadow,yt.spotLights.value=O.state.spot,yt.spotLightShadows.value=O.state.spotShadow,yt.rectAreaLights.value=O.state.rectArea,yt.ltc_1.value=O.state.rectAreaLTC1,yt.ltc_2.value=O.state.rectAreaLTC2,yt.pointLights.value=O.state.point,yt.pointLightShadows.value=O.state.pointShadow,yt.hemisphereLights.value=O.state.hemi,yt.sunShadowMatrix.value=O.state.sunShadowMatrix,yt.sunShadowCascade.value=O.state.sunShadowCascade,yt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,yt.spotLightMatrix.value=O.state.spotLightMatrix,yt.spotLightMap.value=O.state.spotLightMap,yt.pointShadowMatrix.value=O.state.pointShadowMatrix),N.numLightProbeGrids=ec(M.state.lightProbeGridArray),N.currentProgram=Vt,N.uniformsList=null,Vt}function _u(v,C,z,N,O){let ut=Ct.get(v),xt=ut.currentProgram.id+","+N+","+O,ct=ut.programVariants.get(xt);return ct===void 0?(ct=ls(v,C,z),ut.programVariants.set(xt,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=N,ut.toneMapping=O),ct}function nc(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=es.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function ic(v,C){let z=Ct.get(v);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function xu(v,C,z,N,O){C.isScene!==!0&&(C=Ye),Nt.resetTextureUnits();let ut=C.fog,xt=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?C.environment:null,ct=et===null?I.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Wt.workingColorSpace,_t=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,bt=E.get(N.envMap||xt,_t),Ft=N.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Vt=!!z.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),yt=!!z.morphAttributes.position,Ht=!!z.morphAttributes.normal,he=!!z.morphAttributes.color,ee=Sn;N.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ee=I.toneMapping);let te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,we=te!==void 0?te.length:0,St=Ct.get(N),Ne=M.state.lights;if(fe===!0&&(Oe===!0||v!==Q)){let ae=v===Q&&N.id===W;Z.setState(N,v,ae)}let Jt=!1,ri=!1;N.version===St.__version?St.needsLights&&St.lightsStateVersion!==Ne.state.version||O.isBatchedMesh&&St.batching===!1||!O.isBatchedMesh&&St.batching===!0||O.isBatchedMesh&&St.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&St.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&St.instancing===!1||!O.isInstancedMesh&&St.instancing===!0||O.isSkinnedMesh&&St.skinning===!1||!O.isSkinnedMesh&&St.skinning===!0||O.isInstancedMesh&&St.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&St.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&St.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&St.instancingMorph===!1&&O.morphTexture!==null||St.envMap!==bt||N.fog===!0&&St.fog!==ut||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Z.numPlanes||St.numIntersection!==Z.numIntersection)||St.vertexAlphas!==Ft||St.vertexTangents!==Vt||St.morphTargets!==yt||St.morphNormals!==Ht||St.morphColors!==he||St.morphTargetsCount!==we||St.numLightProbeGrids!==ec(M.state.lightProbeGridArray)?Jt=!0:(St.outputColorSpace!==ct||St.toneMapping!==ee)&&(ri=!0):(Jt=!0,St.__version=N.version);let Re=St.currentProgram;(Jt===!0||ri===!0)&&(Re=ri===!0?_u(N,C,O,ct,ee):ls(N,C,O),B&&N.isNodeMaterial&&B.onUpdateProgram(N,Re,St));let Ks=!1,Gn=!1,ai=!1,Zt=Re.getUniforms(),Te=St.uniforms;if(dt.useProgram(Re.program)&&(Ks=!0,Gn=!0,ai=!0),N.id!==W&&(W=N.id,Gn=!0),Ks||Q!==v){dt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Zt.setValue(L,"projectionMatrix",v.projectionMatrix),Zt.setValue(L,"viewMatrix",v.matrixWorldInverse);let ve=Zt.map.cameraPosition;ve!==void 0&&ve.setValue(L,mn.setFromMatrixPosition(v.matrixWorld)),se.logarithmicDepthBuffer&&Zt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Zt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Gn=!0,ai=!0)}if(St.needsLights&&(Ne.state.sunShadowMap.length>0&&Zt.setValue(L,"sunShadowMap",Ne.state.sunShadowMap,Nt),Ne.state.directionalShadowMap.length>0&&Zt.setValue(L,"directionalShadowMap",Ne.state.directionalShadowMap,Nt),Ne.state.spotShadowMap.length>0&&Zt.setValue(L,"spotShadowMap",Ne.state.spotShadowMap,Nt),Ne.state.pointShadowMap.length>0&&Zt.setValue(L,"pointShadowMap",Ne.state.pointShadowMap,Nt)),O.isSkinnedMesh){Zt.setOptional(L,O,"bindMatrix"),Zt.setOptional(L,O,"bindMatrixInverse");let ae=O.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),Zt.setValue(L,"boneTexture",ae.boneTexture,Nt))}O.isBatchedMesh&&(Zt.setOptional(L,O,"batchingTexture"),Zt.setValue(L,"batchingTexture",O._matricesTexture,Nt),Zt.setOptional(L,O,"batchingIdTexture"),Zt.setValue(L,"batchingIdTexture",O._indirectTexture,Nt),Zt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Zt.setValue(L,"batchingColorTexture",O._colorsTexture,Nt));let sn=z.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&$.update(O,z,Re),(Gn||St.receiveShadow!==O.receiveShadow)&&(St.receiveShadow=O.receiveShadow,Zt.setValue(L,"receiveShadow",O.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&C.environment!==null&&(Te.envMapIntensity.value=C.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=Wg()),Gn){if(Zt.setValue(L,"toneMappingExposure",I.toneMappingExposure),St.needsLights&&vu(Te,ai),ut&&N.fog===!0&&rt.refreshFogUniforms(Te,ut),rt.refreshMaterialUniforms(Te,N,gt,Rt,M.state.transmissionRenderTarget[v.id]),St.needsLights&&St.numLightProbeGrids>0){let ae=T,ve=0;for(let wn of M.state.lightProbeGridArray)wn.texture!==null&&(ae.textures[ve]=wn.texture,ae.min[ve]=wn.boundingBox.min,ae.max[ve]=wn.boundingBox.max,ae.resolution[ve]=wn.resolution,ve++);for(let wn in ae)ae[wn].length=ve;Te.probesSH.value=ae.textures,Te.probesMin.value=ae.min,Te.probesMax.value=ae.max,Te.probesResolution.value=ae.resolution}es.upload(L,nc(St),Te,Nt)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(es.upload(L,nc(St),Te,Nt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Zt.setValue(L,"center",O.center),Zt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Zt.setValue(L,"normalMatrix",O.normalMatrix),Zt.setValue(L,"modelMatrix",O.matrixWorld),N.uniformsGroups!==void 0){let ae=N.uniformsGroups;for(let ve=0,wn=ae.length;ve<wn;ve++){let rc=ae[ve];Et.update(rc,Re),Et.bind(rc,Re)}}return Re}function vu(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function yu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(v,C,z){let N=Ct.get(v);N.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Ct.get(v.texture).__webglTexture=C,Ct.get(v.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:z,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let z=Ct.get(v);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,z=0){et=v,Y=C,G=z;let N=null,O=!1,ut=!1;if(v){let ct=Ct.get(v);if(ct.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(L.FRAMEBUFFER,ct.__webglFramebuffer),j.copy(v.viewport),Mt.copy(v.scissor),Ut=v.scissorTest,dt.viewport(j),dt.scissor(Mt),dt.setScissorTest(Ut),W=-1;return}else if(ct.__webglFramebuffer===void 0)Nt.setupRenderTarget(v);else if(ct.__hasExternalTextures)Nt.rebindTextures(v,Ct.get(v.texture).__webglTexture,Ct.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ft=v.depthTexture;if(ct.__boundDepthTexture!==Ft){if(Ft!==null&&Ct.has(Ft)&&(v.width!==Ft.image.width||v.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(v)}}let _t=v.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ut=!0);let bt=Ct.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[C])?N=bt[C][z]:N=bt[C],O=!0):v.samples>0&&Nt.useMultisampledRTT(v)===!1?N=Ct.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?N=bt[z]:N=bt,j.copy(v.viewport),Mt.copy(v.scissor),Ut=v.scissorTest}else j.copy(Pt).multiplyScalar(gt).floor(),Mt.copy(Kt).multiplyScalar(gt).floor(),Ut=jt;if(z!==0&&(N=X),dt.bindFramebuffer(L.FRAMEBUFFER,N)&&dt.drawBuffers(v,N),dt.viewport(j),dt.scissor(Mt),dt.setScissorTest(Ut),O){let ct=Ct.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,ct.__webglTexture,z)}else if(ut){let ct=C;for(let _t=0;_t<v.textures.length;_t++){let bt=Ct.get(v.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,bt.__webglTexture,z,ct)}}else if(v!==null&&z!==0){let ct=Ct.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,z)}W=-1};function sc(v){let C=Ct.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=se.textureFormatReadable(v.format),C.__typeReadable=se.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,z,N,O,ut,xt,ct=0){if(!(v&&v.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ct.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt],Array.isArray(_t)&&(_t=_t[0])),_t){dt.bindFramebuffer(L.FRAMEBUFFER,_t);try{let bt=v.textures[ct],Ft=bt.format,Vt=bt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let yt=sc(bt);if(yt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-N&&z>=0&&z<=v.height-O&&L.readPixels(C,z,N,O,st.convert(Ft),st.convert(Vt),ut)}finally{let bt=et!==null?Ct.get(et).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,C,z,N,O,ut,xt,ct=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Ct.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt],Array.isArray(_t)&&(_t=_t[0])),_t)if(C>=0&&C<=v.width-N&&z>=0&&z<=v.height-O){dt.bindFramebuffer(L.FRAMEBUFFER,_t);let bt=v.textures[ct],Ft=bt.format,Vt=bt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let yt=sc(bt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),L.readPixels(C,z,N,O,st.convert(Ft),st.convert(Vt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let he=et!==null?Ct.get(et).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,he);let ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await oh(L,ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ht),L.deleteSync(ee),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,z=0){let N=Math.pow(2,-z),O=Math.floor(v.image.width*N),ut=Math.floor(v.image.height*N),xt=C!==null?C.x:0,ct=C!==null?C.y:0;Nt.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,xt,ct,O,ut),dt.unbindTexture()},this.copyTextureToTexture=function(v,C,z=null,N=null,O=0,ut=0){let xt,ct,_t,bt,Ft,Vt,yt,Ht,he,ee=v.isCompressedTexture?v.mipmaps[ut]:v.image;if(z!==null)xt=z.max.x-z.min.x,ct=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,bt=z.min.x,Ft=z.min.y,Vt=z.isBox3?z.min.z:0;else{let Zt=Math.pow(2,-O);xt=Math.floor(ee.width*Zt),ct=Math.floor(ee.height*Zt),v.isDataArrayTexture?_t=ee.depth:v.isData3DTexture?_t=Math.floor(ee.depth*Zt):_t=1,bt=0,Ft=0,Vt=0}N!==null?(yt=N.x,Ht=N.y,he=N.z):(yt=0,Ht=0,he=0);let te=st.convert(C.format),we=st.convert(C.type),St;C.isData3DTexture?(Nt.setTexture3D(C,0),St=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Nt.setTexture2DArray(C,0),St=L.TEXTURE_2D_ARRAY):(Nt.setTexture2D(C,0),St=L.TEXTURE_2D),dt.activeTexture(L.TEXTURE0),dt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),dt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),dt.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let Ne=dt.getParameter(L.UNPACK_ROW_LENGTH),Jt=dt.getParameter(L.UNPACK_IMAGE_HEIGHT),ri=dt.getParameter(L.UNPACK_SKIP_PIXELS),Re=dt.getParameter(L.UNPACK_SKIP_ROWS),Ks=dt.getParameter(L.UNPACK_SKIP_IMAGES);dt.pixelStorei(L.UNPACK_ROW_LENGTH,ee.width),dt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee.height),dt.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),dt.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),dt.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt);let Gn=v.isDataArrayTexture||v.isData3DTexture,ai=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let Zt=Ct.get(v),Te=Ct.get(C),sn=Ct.get(Zt.__renderTarget),ae=Ct.get(Te.__renderTarget);dt.bindFramebuffer(L.READ_FRAMEBUFFER,sn.__webglFramebuffer),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ve=0;ve<_t;ve++)Gn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.get(v).__webglTexture,O,Vt+ve),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.get(C).__webglTexture,ut,he+ve)),L.blitFramebuffer(bt,Ft,bt+xt,Ft+ct,yt,Ht,yt+xt,Ht+ct,L.DEPTH_BUFFER_BIT,L.NEAREST);dt.bindFramebuffer(L.READ_FRAMEBUFFER,null),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Ct.has(v)){let Zt=Ct.get(v),Te=Ct.get(C);dt.bindFramebuffer(L.READ_FRAMEBUFFER,P),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let sn=0;sn<_t;sn++)Gn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,O,Vt+sn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,O),ai?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,ut,he+sn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,ut),O!==0?L.blitFramebuffer(bt,Ft,bt+xt,Ft+ct,yt,Ht,yt+xt,Ht+ct,L.COLOR_BUFFER_BIT,L.NEAREST):ai?L.copyTexSubImage3D(St,ut,yt,Ht,he+sn,bt,Ft,xt,ct):L.copyTexSubImage2D(St,ut,yt,Ht,bt,Ft,xt,ct);dt.bindFramebuffer(L.READ_FRAMEBUFFER,null),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ai?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(St,ut,yt,Ht,he,xt,ct,_t,te,we,ee.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(St,ut,yt,Ht,he,xt,ct,_t,te,ee.data):L.texSubImage3D(St,ut,yt,Ht,he,xt,ct,_t,te,we,ee):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,yt,Ht,xt,ct,te,we,ee.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,yt,Ht,ee.width,ee.height,te,ee.data):L.texSubImage2D(L.TEXTURE_2D,ut,yt,Ht,xt,ct,te,we,ee);dt.pixelStorei(L.UNPACK_ROW_LENGTH,Ne),dt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Jt),dt.pixelStorei(L.UNPACK_SKIP_PIXELS,ri),dt.pixelStorei(L.UNPACK_SKIP_ROWS,Re),dt.pixelStorei(L.UNPACK_SKIP_IMAGES,Ks),ut===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&L.generateMipmap(St),dt.unbindTexture()},this.initRenderTarget=function(v){Ct.get(v).__webglFramebuffer===void 0&&Nt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Nt.setTextureCube(v,0):v.isData3DTexture?Nt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Nt.setTexture2DArray(v,0):Nt.setTexture2D(v,0),dt.unbindTexture()},this.resetState=function(){Y=0,G=0,et=null,dt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Tn=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Ae=(i,t,e)=>i+(t-i)*e,pn=(i,t,e)=>{let n=Tn((e-i)/(t-i));return n*n*(3-2*n)},En=(i,t=document)=>t.querySelector(i),zn=(i,t=document)=>Array.from(t.querySelectorAll(i)),$a=document.documentElement,Ws=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches,Mi={ok:!1,W:1,H:1,about:0,focus:0,work:0,toolkit:0,practice:0,also:0,end:0,max:1,narrow:!1},qg={x:0,s:1,a:1,b:1,r:1,bdy:0};function is(){let i=innerWidth,t=innerHeight,e=window.scrollY||0,n=s=>{let r=document.getElementById(s);return r?r.getBoundingClientRect().top+e:0};Mi={W:i,H:t,about:n("about"),focus:n("focus"),work:n("work"),toolkit:n("toolkit"),practice:n("practice"),also:n("also"),end:n("end"),max:Math.max(1,$a.scrollHeight-t),narrow:i<860||i/t<1},Mi.ok=Mi.end>0,typeof At<"u"&&(At.half=0),Zh=["about","work","toolkit","practice"].map(s=>({id:s,top:n(s)}))}var Zh=[];function Jh(i){if(!Mi.ok)return qg;let{H:t,work:e,toolkit:n,end:s,max:r,narrow:a}=Mi,o=a?{about:{x:0,s:.92,a:.32},work:{x:0,s:.82,a:.1},tool:{x:0,s:.82,a:.12}}:{about:{x:.215,s:.8,a:1},work:{x:.265,s:.74,a:.17},tool:{x:.285,s:.7,a:.24}},l=pn(.04*t,.9*t,i),c=pn(e-1.25*t,e-.5*t,i),u=pn(e-.75*t,e-.1*t,i),m=pn(n-1*t,n-.2*t,i),h=Math.min(s,r),d=pn(h-1.05*t,h-.05*t,i),g=0,y=1,f=1;g=Ae(g,o.about.x,l),y=Ae(y,o.about.s,l),f=Ae(f,o.about.a,l),g=Ae(g,o.work.x,u),y=Ae(y,o.work.s,u),f=Ae(f,o.work.a,u),g=Ae(g,o.tool.x,m),y=Ae(y,o.tool.s,m),f=Ae(f,o.tool.a,m),g=Ae(g,0,d),y=Ae(y,a?.74:1,d),f=Ae(f,1,d);let p=Ae(1-pn(.04*t,.5*t,i),1,d),S=d>0?(1-d)*.22*t:Math.min(i,t)*.9;return{x:g,s:y,a:f,b:p,r:1-c,bdy:S}}var qh=(()=>{let i=[];for(let t=0;t<7;t++){let e=t/6;i.push(`rgb(${Math.round(Ae(96,255,e))},${Math.round(Ae(10,96,e*e))},${Math.round(Ae(22,112,e*e))})`)}return i})(),Za=(i,t,e,n,s,r)=>{i.beginPath(),i.roundRect?i.roundRect(t,e,n,s,r):i.rect(t,e,n,s)},Vs=(i,t,e)=>{let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},Yg={field(i,t,e,n){let s=e*.47,r=t*.5;i.save(),i.beginPath(),i.rect(0,0,t,s),i.clip();let a=e*.22,o=s-a*.1+Math.sin(n*.6)*.7,l=i.createRadialGradient(r,o,0,r,o,a*1.8);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.38,"rgba(255,255,255,.9)"),l.addColorStop(.42,"rgba(255,255,255,.3)"),l.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=l,i.fillRect(0,0,t,s),i.restore(),i.strokeStyle="rgba(255,255,255,.85)",i.lineWidth=1.05,i.beginPath();for(let h=0;h<=t;h+=1){let d=h/t,g=s*.74-d*s*.5+Math.sin(d*17+n*.9)*1.9+Math.sin(d*41-n*1.3)*.8;h?i.lineTo(h,g):i.moveTo(h,g)}i.stroke(),i.fillStyle="rgba(255,255,255,.9)";for(let h=1;h<9;h++){let d=h/9,g=s*.74-d*s*.5+Math.sin(d*17+n*.9)*1.9+Math.sin(d*41-n*1.3)*.8;i.fillRect(d*t-.6,g-.6,1.4,1.4)}i.fillStyle="rgba(255,255,255,.62)";let c=t*.76;i.fillRect(c,s-3.2,9,3.2),i.beginPath(),i.moveTo(c-1,s-3.2),i.lineTo(c+4.5,s-6.6),i.lineTo(c+10,s-3.2),i.fill(),i.fillStyle="rgba(255,255,255,.55)",i.fillRect(0,s,t,.8);let u=t<70?5:9,m=9/u;for(let h=-u;h<=u;h++){let d=r+h*m*t*.01,g=r+h*m*t*.145;i.strokeStyle="rgba(255,255,255,.34)",i.lineWidth=.8,i.beginPath(),i.moveTo(d,s),i.lineTo(g,e),i.stroke();let y=9;for(let f=0;f<y;f++){let p=(f+n*.32%1)/y,S=Math.pow(p,1.8),w=Ae(d,g,S),T=s+(e-s)*S,A=.35+S*1.55;i.fillStyle=`rgba(255,255,255,${(.28+.72*S).toFixed(3)})`,i.beginPath(),i.arc(w,T-A*1.2+Math.sin(n*1.7+h+f)*.18*S,A,0,6.2832),i.fill()}}},doc(i,t,e,n){let s=e*.86,r=s*.74;r>t*.72&&(r=t*.72,s=r/.74);let a=(t-r)/2,o=(e-s)/2,l=o+n*.2%1.18*s;i.strokeStyle="rgba(255,255,255,.7)",i.lineWidth=.9,Za(i,a,o,r,s,1.6),i.stroke(),i.fillStyle="rgba(255,255,255,.95)",i.fillRect(a+r*.1,o+s*.07,r*.5,1.9),i.fillStyle="rgba(255,255,255,.35)",i.fillRect(a+r*.1,o+s*.07+3.1,r*.28,.9);let c=o+s*.19,u=s*.15;i.strokeStyle="rgba(255,255,255,.55)",i.lineWidth=.8,i.strokeRect(a+r*.1,c,r*.8,u),i.beginPath(),i.moveTo(a+r*.1,c+u),i.lineTo(a+r*.38,c+u*.4),i.lineTo(a+r*.58,c+u*.75),i.lineTo(a+r*.9,c+u*.2),i.stroke();let m=c+u+3.4,h=2.6,d=Math.floor((o+s-3.5-m)/h);for(let y=0;y<d;y++){let f=m+y*h,p=y%6===5,S=r*.8*(p?.4:.62+.38*Vs(y,7,3)),w=l-f,T=w>0,A=w>-2&&w<2.4?1:T?.82:.34;i.fillStyle=`rgba(255,255,255,${A})`,i.fillRect(a+r*.1,f,S,.95)}let g=i.createLinearGradient(0,l-5,0,l+1.5);g.addColorStop(0,"rgba(255,255,255,0)"),g.addColorStop(1,"rgba(255,255,255,.55)"),i.fillStyle=g,i.fillRect(a-1,l-5,r+2,6.5),i.fillStyle="rgba(255,255,255,1)",i.fillRect(a-2,l,r+4,.9),i.beginPath(),i.moveTo(a-8,l-2.4),i.lineTo(a-3,l+.4),i.lineTo(a-8,l+3.2),i.fill()},chat(i,t,e,n){let r=n%8,a=1-pn(7.2,8,r);i.globalAlpha=a;let o=pn(.2,.8,r);if(i.globalAlpha=a*o,i.strokeStyle="rgba(255,255,255,.75)",i.lineWidth=.9,Za(i,t*.36,e*.09,t*.58,e*.2,2.4),i.stroke(),i.fillStyle="rgba(255,255,255,.95)",i.fillRect(t*.4,e*.14,t*.46,1),i.fillRect(t*.4,e*.14+2.6,t*.28,1),i.globalAlpha=a,r>1.3&&r<2.8){let l=pn(1.3,1.7,r)*(1-pn(2.5,2.8,r));i.globalAlpha=a*l,i.strokeStyle="rgba(255,255,255,.7)",Za(i,t*.06,e*.38,t*.17,e*.12,2.4),i.stroke();for(let c=0;c<3;c++){let u=Math.sin(n*7-c*.9)*.9;i.fillStyle="rgba(255,255,255,.95)",i.beginPath(),i.arc(t*.105+c*2.6,e*.44+u,.8,0,6.2832),i.fill()}}if(r>2.7){i.globalAlpha=a*pn(2.7,3.1,r);let l=t*.06,c=e*.38,u=t*.74,m=e*.52;i.strokeStyle="rgba(255,255,255,.75)",i.lineWidth=.9,Za(i,l,c,u,m,2.4),i.stroke();let h=6,d=Tn((r-3.1)/3.6)*h;for(let g=0;g<h;g++){let y=Tn(d-g),f=g===h-1?.45:.78+.16*Vs(g,2,9),p=(u-6)*f*y,S=c+3.2+g*((m-6)/h);i.fillStyle="rgba(255,255,255,.92)",i.fillRect(l+3,S,p,1),y>0&&y<1&&Math.floor(n*3)%2===0&&i.fillRect(l+3+p+.6,S-.8,1.6,2.6)}}i.globalAlpha=1},qr(i,t,e,n){let r=Math.max(1,Math.floor(Math.min(t,e)*.84/21)),a=21*r,o=Math.round((t-a)/2),l=Math.round((e-a)/2),c=(h,d)=>h<7&&d<7||h>13&&d<7||h<7&&d>13,u=(h,d)=>{let g=h%14,y=d%14,f=h>13?h-14:h,p=d>13?d-14:d,S=Math.max(Math.abs(f-3),Math.abs(p-3));return S===3||S<=1},m=n*.38%1.25*a;for(let h=0;h<21;h++)for(let d=0;d<21;d++){let g;if(c(d,h))g=u(d,h)?.95:0;else{let f=n*.55-(d+h)*.035,p=Math.floor(f),S=f-p;g=Vs(d,h,p)>.5?.88:0,S<.1&&Vs(d,h,p-1)!==Vs(d,h,p)&&(g=1)}let y=Math.max(0,1-Math.abs(h*r+r/2-m)/5);g>0&&(g=Math.min(1,g+y*.2)),y>.6&&g===0&&(g=.18),g>0&&(i.fillStyle=`rgba(255,255,255,${g})`,i.fillRect(o+d*r,l+h*r,r,r))}m<a+3&&(i.fillStyle="rgba(255,255,255,.95)",i.fillRect(o-3,l+m,a+6,.9))}},Ka=[];function Zg(i){let t=i.dataset.art,e=Yg[t];if(!e)return;let n=i.getContext("2d"),s=document.createElement("canvas"),r=s.getContext("2d",{willReadFrequently:!0}),a={cv:i,visible:!1,t0:Math.random()*2,mx:-1e4,my:-1e4,dirty:!0},o=0,l=0,c=1,u=7,m=1,h=1,d=qh.map(()=>[]);function g(){let f=i.getBoundingClientRect();f.width<4||f.height<4||(o=f.width,l=f.height,c=Math.min(2,window.devicePixelRatio||1),i.width=Math.round(o*c),i.height=Math.round(l*c),u=o<320?6:7,m=Math.max(12,Math.floor(o/u)),h=Math.max(12,Math.floor(l/u)),s.width=m,s.height=h,a.dirty=!0)}a.size=g,a.render=f=>{if(!o)return;r.setTransform(1,0,0,1,0,0),r.globalAlpha=1,r.fillStyle="#000",r.fillRect(0,0,m,h),e(r,m,h,f+a.t0);let p=r.getImageData(0,0,m,h).data;n.setTransform(c,0,0,c,0,0),n.clearRect(0,0,o,l),d.forEach(A=>A.length=0);let S=(o-m*u)/2,w=(l-h*u)/2,T=78;for(let A=0;A<h;A++)for(let M=0;M<m;M++){let _=p[(A*m+M)*4]/255;if(_<.05)continue;let b=S+(M+.5)*u,F=w+(A+.5)*u,I=b-a.mx,D=F-a.my,B=I*I+D*D;if(B<T*T){let P=Math.sqrt(B)+.001,V=1-P/T,Y=V*V*18;b+=I/P*Y,F+=D/P*Y}let X=u*.5*(.28+.72*Math.sqrt(_))*.94;d[Math.min(6,Math.floor(_*7))].push(b,F,X)}for(let A=0;A<7;A++){let M=d[A];if(M.length){n.fillStyle=qh[A],n.beginPath();for(let _=0;_<M.length;_+=3)n.moveTo(M[_]+M[_+2],M[_+1]),n.arc(M[_],M[_+1],M[_+2],0,6.2832);n.fill()}}a.dirty=!1};let y=i.parentElement;y.addEventListener("pointermove",f=>{let p=i.getBoundingClientRect();a.mx=f.clientX-p.left,a.my=f.clientY-p.top},{passive:!0}),y.addEventListener("pointerleave",()=>{a.mx=a.my=-1e4}),window.ResizeObserver&&new ResizeObserver(g).observe(i),window.IntersectionObserver?new IntersectionObserver(f=>f.forEach(p=>{a.visible=p.isIntersecting})).observe(i):a.visible=!0,g(),Ka.push(a)}function Jg(){let i=En("#tk");if(!i)return;let t=zn(".chip",i),e=zn(".pp",i),n=new Map;t.forEach(o=>{let l=(o.dataset.p||"").split(/\s+/).filter(Boolean);o._ids=l,o.dataset.n=String(l.length),l.forEach(c=>{n.has(c)||n.set(c,[]),n.get(c).push(o)})}),e.forEach(o=>{let l=(n.get(o.dataset.id)||[]).length;o.querySelector("em").textContent=l+(l===1?" tool":" tools")});let s=null,r=o=>{if(t.forEach(l=>l.classList.remove("hit","sel")),e.forEach(l=>l.classList.remove("hit")),i.classList.toggle("hasSel",!!o),!!o)if(o.type==="chip")o.el.classList.add("hit","sel"),e.forEach(l=>l.classList.toggle("hit",o.el._ids.includes(l.dataset.id)));else{let l=o.el.dataset.id;o.el.classList.add("hit"),t.forEach(c=>c.classList.toggle("hit",c._ids.includes(l)))}},a=(o,l)=>{o.addEventListener("pointerenter",c=>{c.pointerType!=="touch"&&r({type:l,el:o})}),o.addEventListener("pointerleave",()=>r(s)),o.addEventListener("focus",()=>r({type:l,el:o})),o.addEventListener("blur",()=>r(s)),o.addEventListener("click",()=>{s=s&&s.el===o?null:{type:l,el:o},r(s)}),o.addEventListener("keydown",c=>{l==="pp"&&(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),o.click())})};t.forEach(o=>a(o,"chip")),e.forEach(o=>a(o,"pp"))}function $g(){let i=En("#dotfield");if(!i)return;let t=0;[["e",43],["m",13],["h",1]].forEach(([n,s])=>{for(let r=0;r<s;r++){let a=document.createElement("i");a.className="d "+n,a.style.setProperty("--n",String(t++)),i.appendChild(a)}});let e=zn(".d",i);if(i.addEventListener("pointermove",n=>{for(let s of e){let r=s.getBoundingClientRect(),a=n.clientX-(r.left+r.width/2),o=n.clientY-(r.top+r.height/2),l=Math.max(0,1-Math.hypot(a,o)/90);s.style.setProperty("--s",(1+1.05*l*l).toFixed(3))}},{passive:!0}),i.addEventListener("pointerleave",()=>e.forEach(n=>n.style.removeProperty("--s"))),zn(".legend li").forEach((n,s)=>{let r=["e","m","h"][s];n.addEventListener("pointerenter",()=>{i.dataset.hl=r}),n.addEventListener("pointerleave",()=>{delete i.dataset.hl})}),window.IntersectionObserver){let n=new IntersectionObserver(s=>s.forEach(r=>{r.isIntersecting&&(i.classList.add("play"),n.disconnect())}),{threshold:.3});n.observe(i)}}function Kg(){let i=zn("[data-count]");if(!i.length||Ws||!window.IntersectionObserver)return;let t=new IntersectionObserver(e=>e.forEach(n=>{if(!n.isIntersecting)return;t.unobserve(n.target);let s=n.target,r=+s.dataset.count,a=performance.now(),o=1300,l=c=>{let u=Tn((c-a)/o);s.textContent=String(Math.round(r*(1-Math.pow(1-u,3)))),u<1&&requestAnimationFrame(l)};s.textContent="0",requestAnimationFrame(l)}),{threshold:.6});i.forEach(e=>t.observe(e))}var Ja=[],Hs=null,Yh=-1;function Qg(){if(Hs=En(".statement"),!Hs)return;let i=t=>{Array.from(t.childNodes).forEach(e=>{if(e.nodeType===3){let n=document.createDocumentFragment();e.textContent.split(/(\s+)/).forEach(s=>{if(s)if(/^\s+$/.test(s))n.appendChild(document.createTextNode(s));else{let r=document.createElement("span");r.className="w",r.textContent=s,n.appendChild(r),Ja.push(r)}}),e.replaceWith(n)}else e.nodeType===1&&i(e)})};i(Hs)}var At={y:0,vel:0,mx:0,my:0,sx:0,sy:0,rx:-100,ry:-100,marq:0,half:1,seen:!1,acc:0,prog:-1,active:"",sc:!1},jg,Ll,yi,Dl,Si,Bn=[],$h=[];function Kh(i={}){jg=En("#nav"),Ll=En("#spot"),Dl=En("#prog"),Si=En("#marq"),yi=document.createElement("div"),yi.id="ring",document.body.appendChild(yi),Bn=zn(".card"),$h=zn(".word"),Bn.forEach(s=>s.addEventListener("pointermove",r=>{let a=s.getBoundingClientRect();s.style.setProperty("--cx",r.clientX-a.left+"px"),s.style.setProperty("--cy",r.clientY-a.top+"px")},{passive:!0})),Qg(),zn("canvas.dotart").forEach(Zg),Jg(),$g(),Kg(),Si&&Array.from(Si.children).forEach(r=>Si.appendChild(r.cloneNode(!0))),window.addEventListener("pointermove",s=>{At.mx=s.clientX,At.my=s.clientY,At.seen||(At.seen=!0,At.sx=At.rx=At.mx,At.sy=At.ry=At.my,yi.classList.add("on"));let r=s.target.closest&&s.target.closest("a,button,.pp,.chip,.frow,.legend li");yi.classList.toggle("big",!!r)},{passive:!0}),document.addEventListener("pointerleave",()=>yi.classList.remove("on"));let t=s=>{if(!$a.classList.contains("unlocked"))return;let r=s==="top"?null:document.getElementById(s),a=r?r.getBoundingClientRect().top+window.scrollY-0:0;window.scrollTo({top:a,behavior:Ws?"auto":"smooth"})};document.addEventListener("click",s=>{let r=s.target.closest&&s.target.closest("[data-go]");r&&(s.preventDefault(),t(r.dataset.go))});let e=En("#toTop");e&&e.addEventListener("click",()=>t("top"));let n=En("#clock");if(n){let s=()=>{try{n.textContent=" \xB7 "+new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"})+" IST"}catch{}};s(),setInterval(s,3e4)}if(is(),window.ResizeObserver){let s=0;new ResizeObserver(()=>{cancelAnimationFrame(s),s=requestAnimationFrame(is)}).observe(En("#site"))}window.addEventListener("load",is),Ws&&Ka.forEach(s=>s.render(2.2))}function Qh(i){if(!Dl)return;let t=window.scrollY||0,e=innerHeight,n=$a.classList.contains("unlocked");At.vel+=((t-At.y)/Math.max(i,.001)-At.vel)*Math.min(1,i*8),At.y=t;let s=t>40;s!==At.sc&&(At.sc=s,$a.classList.toggle("scrolled",s));let r=Tn(t/Mi.max);Math.abs(r-At.prog)>5e-4&&(At.prog=r,Dl.style.transform=`scaleX(${r.toFixed(4)})`);let a="";for(let o of Zh)t+e*.45>=o.top&&(a=o.id);if(a!==At.active&&(At.active=a,zn("#nav nav a[data-sec]").forEach(o=>o.classList.toggle("active",o.dataset.sec===a))),At.seen){let o=1-Math.exp(-i*9);At.sx+=(At.mx-At.sx)*o,At.sy+=(At.my-At.sy)*o,At.rx+=(At.mx-At.rx)*(1-Math.exp(-i*16)),At.ry+=(At.my-At.ry)*(1-Math.exp(-i*16)),n&&(Ll.style.setProperty("--mx",At.sx.toFixed(1)+"px"),Ll.style.setProperty("--my",At.sy.toFixed(1)+"px")),yi.style.transform=`translate3d(${At.rx.toFixed(1)}px,${At.ry.toFixed(1)}px,0)`}if(n){for(let o of $h){let l=o.getBoundingClientRect(),c=Tn((e*.95-l.top)/(e*.58))*100;Math.abs(c-(o._p??-1))>.4&&(o._p=c,o.style.setProperty("--p",c.toFixed(1)))}if(Hs&&Ja.length){let o=Hs.getBoundingClientRect(),l=Tn((e*.9-o.top)/(e*.5));if(Math.abs(l-Yh)>.002){Yh=l;let c=Ja.length;Ja.forEach((u,m)=>{u.style.opacity=(.16+.84*Tn((l*(c+4)-m)/4)).toFixed(3)})}}if(!Mi.narrow&&Bn.length)for(let o=0;o<Bn.length-1;o++){let l=Bn[o].getBoundingClientRect(),c=Bn[o+1].getBoundingClientRect(),m=Tn(1-(c.top-l.top)/(l.height*.92)).toFixed(3);Bn[o]._k!==m&&(Bn[o]._k=m,Bn[o].style.setProperty("--k",m))}if(Si&&((!At.half||At.half<10)&&(At.half=Si.scrollWidth/2),!Ws)){if(At.marq-=(46+Math.min(1400,Math.abs(At.vel))*.42)*i,At.half>10)for(;At.marq<=-At.half;)At.marq+=At.half;let o=Tn(-At.vel*.006,-9,9);Si.style.transform=`translate3d(${At.marq.toFixed(1)}px,0,0) skewX(${o.toFixed(2)}deg)`}if(Ws)for(let o of Ka)o.visible&&o.dirty&&o.render(2.2);else if(At.acc+=i,At.acc>1/30){At.acc=0;let o=performance.now()/1e3;for(let l of Ka)l.visible&&l.render(o)}}}var Nl="DEVELOPER",Bl=1920,Ys=1072,iu=1e3,t0=1.12,e0=.535,n0=30*Math.PI/180,i0=7*Math.PI/180,Qa=3.2,s0=2.1,r0=.55,a0=.35,eo=.8,no=3.6,su=64,o0=7,jh=window.__EMBED||null,io={dots:858258,photo:101384},tu={dots:"dots.bin",photo:"photo-cutout.webp"},os=i=>document.querySelector(i),l0=os("#gl"),so=os("#pre"),ru=os("#pct"),Hl=os("#arc"),qs=os("#reveal"),Wl=2*Math.PI*su;Hl.style.strokeDasharray=`${Wl}`;Hl.style.strokeDashoffset=`${Wl}`;function Xl(i){let t=Math.max(0,Math.min(100,Math.floor(i*100+1e-6)));ru.firstChild.nodeValue=String(t),Hl.style.strokeDashoffset=`${Wl*(1-Math.min(1,i))}`}Xl(0);(function(){let t=document.createElement("canvas");t.width=t.height=192;let e=t.getContext("2d"),n=e.createImageData(192,192);for(let s=0;s<n.data.length;s+=4){let r=90+Math.random()*120|0;n.data[s]=n.data[s+1]=n.data[s+2]=r,n.data[s+3]=255}e.putImageData(n,0,0),os("#grain").style.backgroundImage=`url(${t.toDataURL("image/png")})`})();var Ul={dots:0,photo:0},c0=io.dots+io.photo,ro=0;function eu(i,t){Ul[i]+=t;let e=Math.min(Ul.dots,io.dots)+Math.min(Ul.photo,io.photo);ro=Math.min(1,e/c0),Xl(ro)}async function nu(i){if(jh){let o=jh[i],l=1<<18,c=new Uint8Array(Math.floor(o.length*3/4)-(o.endsWith("==")?2:o.endsWith("=")?1:0)),u=0;for(let m=0;m<o.length;m+=l){let h=atob(o.slice(m,m+l));for(let d=0;d<h.length;d++)c[u++]=h.charCodeAt(d);eu(i,h.length),await new Promise(d=>setTimeout(d,0))}return c}let t=await fetch(tu[i]);if(!t.ok)throw new Error(`${tu[i]}: ${t.status}`);let e=t.body.getReader(),n=[],s=0;for(;;){let{done:o,value:l}=await e.read();if(o)break;n.push(l),s+=l.length,eu(i,l.length)}let r=new Uint8Array(s),a=0;for(let o of n)r.set(o,a),a+=o.length;return r}async function h0(i){let t=new Blob([i],{type:"image/webp"});try{let e=await createImageBitmap(t,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}),n=new be(e);return n.flipY=!1,n}catch{let n=URL.createObjectURL(t),s=new Image;s.src=n,await s.decode();let r=new be(s);return r.flipY=!0,r}}function u0(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength);if(t.getUint32(0,!1)!==1111773012)throw new Error("bad dot file");let e=t.getUint32(4,!0),n=t.getFloat32(8,!0),s=16,r=()=>{let M=new Int16Array(i.buffer.slice(i.byteOffset+s,i.byteOffset+s+2*e));return s+=2*e,M},a=r(),o=r(),l=r(),c=()=>{let M=new Int8Array(i.buffer,i.byteOffset+s,e);return s+=e,M},u=c(),m=c(),h=c(),d=new Uint8Array(i.buffer,i.byteOffset+s,e);s+=e;let g=new Uint8Array(i.buffer,i.byteOffset+s,e),y=new Float32Array(3*e),f=new Float32Array(3*e),p=new Float32Array(4*e),S=new Float32Array(e),w=new Float32Array(e),T=2654435769,A=()=>{T=T+1831565813|0;let M=Math.imul(T^T>>>15,1|T);return M=M+Math.imul(M^M>>>7,61|M)^M,((M^M>>>14)>>>0)/4294967296};for(let M=0;M<e;M++){y[3*M]=a[M]/n,y[3*M+1]=o[M]/n,y[3*M+2]=l[M]/n;let _=u[M]/127,b=m[M]/127,F=h[M]/127,I=Math.hypot(_,b,F)||1;f[3*M]=_/I,f[3*M+1]=b/I,f[3*M+2]=F/I,p[4*M]=Math.min(1,Math.max(0,d[M]/255*.9+A()*.1)),p[4*M+1]=A(),p[4*M+2]=A(),p[4*M+3]=A(),S[M]=A(),w[M]=g[M]/255}return{n:e,pos:y,nrm:f,rnd:p,r2:S,br:w}}async function d0(){try{await Promise.all([document.fonts.load("100px Anton"),document.fonts.ready])}catch{}}var qe=new Xa({canvas:l0,antialias:!1,alpha:!1,powerPreference:"high-performance"});qe.setClearColor(328195,1);qe.outputColorSpace=di;var ii=new Zi(-1,1,1,-1,-2e3,2e3);ii.position.z=1e3;var Zs=new qi,au=new qi,ss=new Ue(4,4,{minFilter:de,magFilter:de,depthBuffer:!1}),wt={uS:{value:1},uY0:{value:0},uTime:{value:0},uDpr:{value:1},uView:{value:new Xt(1,1)},uRes:{value:new Xt(1,1)},uYaw:{value:0},uPitch:{value:0},uYawSh:{value:0},uFly:{value:0},uRingAlpha:{value:0},uRingR:{value:su},uSweepY:{value:-9999},uSweepAmt:{value:0},uRevY:{value:-9999},uRevAmt:{value:0},uCursor:{value:new k(0,0,240)},uCursorAmt:{value:0},uPhoto:{value:null},uMask:{value:ss.texture},uBandWY:{value:99999},uGain:{value:.62},uLit:{value:1},uBannerAlpha:{value:0},uDustAlpha:{value:0},uStageS:{value:1},uShiftX:{value:0},uStageA:{value:1}},ou=`
precision highp float;
attribute vec3 aNrm; attribute vec4 aRand; attribute float aRand2; attribute float aBr;
uniform float uS, uY0, uDpr, uTime, uYaw, uPitch, uYawSh, uFly, uRingAlpha, uRingR;
uniform float uSweepY, uSweepAmt, uRevY, uRevAmt, uCursorAmt, uGain, uLit;
uniform float uStageS, uShiftX, uStageA;
uniform vec3 uCursor; uniform vec2 uView; uniform sampler2D uPhoto;
varying vec3 vCol; varying float vA;
const vec3 CRIMSON = vec3(0.64, 0.035, 0.055);
const float PI = 3.14159265;
vec3 rotYaw(vec3 p, vec3 c, float a){ vec3 q = p - c; float cs = cos(a), sn = sin(a); return c + vec3(cs*q.x - sn*q.z, q.y, sn*q.x + cs*q.z); }
vec3 rotPitch(vec3 p, vec3 c, float b){ vec3 q = p - c; float cs = cos(b), sn = sin(b); return c + vec3(q.x, cs*q.y + sn*q.z, -sn*q.y + cs*q.z); }
vec3 rotYawN(vec3 n, float a){ float cs = cos(a), sn = sin(a); return vec3(cs*n.x - sn*n.z, n.y, sn*n.x + cs*n.z); }
vec3 rotPitchN(vec3 n, float b){ float cs = cos(b), sn = sin(b); return vec3(n.x, cs*n.y + sn*n.z, -sn*n.y + cs*n.z); }
void main(){
  vec3 P0 = position;
  // head turns fully, shoulders follow a little, neck blends the two
  float yaw   = mix(uYawSh, uYaw, 1.0 - smoothstep(500.0, 690.0, P0.y));
  float pitch = uPitch * (1.0 - smoothstep(470.0, 640.0, P0.y));
  vec3 P = rotYaw(P0, vec3(1000.0, 0.0, -45.0), yaw);
  P = rotPitch(P, vec3(1000.0, 540.0, -45.0), pitch);
  vec3 N = rotPitchN(rotYawN(aNrm, yaw), pitch);

  // reveal: above the band the dots press flat onto the photo
  float d = uRevY - P0.y;
  float flatK = smoothstep(0.0, 110.0, d) * uRevAmt;
  N = normalize(mix(N, vec3(0.0, 0.0, -1.0), flatK));

  vec3 W = vec3((P.x - ${iu.toFixed(1)}) * uS, uY0 - P.y * uS, -P.z * uS);
  W.xy = vec2(W.x * uStageS + uShiftX, (W.y + 0.5 * uView.y) * uStageS - 0.5 * uView.y);   // scroll stage: scale about the bottom centre, then slide
  vec3 Nw = normalize(vec3(N.x, -N.y, -N.z));

  // lighting: mostly even clay shading, soft key, rim, cursor light
  vec3 Lk = normalize(vec3(-0.5, 0.6, 0.65));
  float key = pow(dot(Nw, Lk) * 0.5 + 0.5, 1.7);
  float rimMask = 0.35 + 0.65 * max(dot(normalize(Nw.xy + 1e-4), normalize(vec2(0.7, 0.7))), 0.0);
  float rim = pow(1.0 - clamp(Nw.z, 0.0, 1.0), 2.6) * rimMask;
  float I = aBr * (0.62 + 0.62 * key * uLit) + 0.24 * rim * uLit;
  I = mix(I, aBr * 0.95 + 0.04, flatK * 0.85);
  vec3 Lc = uCursor - W; float dc = length(Lc) + 1e-3;
  float sig = 0.2 * uView.y;
  float cur = max(dot(Nw, Lc / dc), 0.0) * exp(-dot(Lc.xy, Lc.xy) / (2.0 * sig * sig));
  I += uCursorAmt * 1.15 * cur * (0.45 + 0.55 * aBr);
  float sg = exp(-pow((P0.y - uSweepY) / 70.0, 2.0)) * uSweepAmt;
  float rg = exp(-pow(d / 62.0, 2.0)) * uRevAmt;
  I += 0.95 * sg + 0.95 * rg;
  vec3 base = mix(CRIMSON, vec3(0.95, 0.22, 0.20), clamp(sg + rg, 0.0, 1.0) * 0.55) * I * uGain;

  // reveal colour: dots take the photo's colour and fade
  vec3 pc = textureLod(uPhoto, vec2(P0.x / ${Bl.toFixed(1)}, 1.0 - P0.y / ${Ys.toFixed(1)}), 1.5).rgb;
  base = mix(base, pc * 0.92, smoothstep(10.0, 120.0, d) * uRevAmt);
  float revFade = 1.0 - smoothstep(190.0, 330.0, d) * uRevAmt;

  // fly-in from the preloader ring
  float delay = aRand.w * 0.40;
  float tt = clamp((uFly - delay) / 0.60, 0.0, 1.0);
  float e = tt < 0.5 ? 4.0*tt*tt*tt : 1.0 - pow(-2.0*tt + 2.0, 3.0) / 2.0;
  float ang = aRand.y * 6.2831853;
  float rr = uRingR + (aRand.z - 0.5) * 2.6;
  vec2 ringP = rr * vec2(cos(ang), sin(ang));
  vec2 dir = W.xy - ringP; float dl = length(dir) + 1e-3;
  vec2 perp = vec2(-dir.y, dir.x) / dl;
  vec3 pos = vec3(mix(ringP, W.xy, e), mix(0.0, W.z, e));
  pos.xy += perp * sin(PI * e) * (aRand.x - 0.5) * 0.42 * dl;
  float onRing = step(aRand2, 0.055);                    // the ring itself is drawn by a sparse subset
  float gain = mix(onRing * 0.15 * uRingAlpha, 1.0, smoothstep(0.0, 0.32, e));
  float size = uDpr * uS * uStageS * (3.5 + 2.1 * aRand.x) * (0.88 + 0.26 * clamp(I, 0.0, 1.2));
  size = mix(uDpr * 2.7, size, e);

  gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
#ifdef MASK
  vCol = vec3(1.0); vA = gain * revFade * smoothstep(0.55, 1.0, e) * uStageA;
  gl_PointSize = size * 0.5 * 1.35;
#else
  vCol = base; vA = gain * revFade * uStageA;
  gl_PointSize = size * mix(1.0, 1.25, flatK);
#endif
}`,lu=`
precision highp float;
varying vec3 vCol; varying float vA;
void main(){
  vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0;
  if (r2 > 1.0) discard;
#ifdef MASK
  gl_FragColor = vec4(vec3(vA), 1.0);
#else
  float a = pow(1.0 - r2, 1.7);
  gl_FragColor = vec4(vCol * a * vA, 1.0);
#endif
}`,ql={transparent:!0,depthTest:!1,depthWrite:!1,blending:ea,blendEquation:Fn,blendSrc:Qi,blendDst:Qi,blendSrcAlpha:na,blendDstAlpha:Qi},f0=new Ie({uniforms:wt,vertexShader:ou,fragmentShader:lu,...ql}),p0=new Ie({uniforms:wt,vertexShader:ou,fragmentShader:lu,defines:{MASK:1},...ql}),cu=`varying vec2 vUv; varying vec2 vWorld;
void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xy; gl_Position = projectionMatrix * viewMatrix * w; }`,m0=`precision highp float;
uniform sampler2D uTex, uMask; uniform vec2 uRes; uniform float uBandWY, uBannerAlpha, uDpr;
varying vec2 vUv; varying vec2 vWorld;
void main(){
  float t = texture2D(uTex, vUv).a;
  vec2 su = gl_FragCoord.xy / uRes; vec2 px = 1.8 * uDpr / uRes; float m = 0.0;
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) m += texture2D(uMask, su + vec2(float(i), float(j)) * px).r;
  m /= 9.0;
  float dim = smoothstep(0.25, 0.70, m);
  float a = t * mix(1.0, 0.035, dim);
  float dp = vWorld.y - uBandWY;                           // >0 once the reveal band has passed this pixel
  float cr = smoothstep(0.0, 80.0, dp);
  float dk = smoothstep(70.0, 600.0, dp);
  vec3 col = mix(vec3(0.66, 0.66, 0.68), vec3(0.80, 0.055, 0.085), cr);
  col = mix(col, vec3(0.05, 0.012, 0.018), dk);
  gl_FragColor = vec4(col, a * uBannerAlpha);
}`,hu=new Ie({uniforms:{...wt,uTex:{value:null}},vertexShader:cu,fragmentShader:m0,transparent:!0,depthTest:!1,depthWrite:!1}),as=new He(new Kn(1,1),hu);as.renderOrder=0;as.frustumCulled=!1;Zs.add(as);var g0=`precision highp float;
uniform sampler2D uPhoto; uniform float uRevY, uRevAmt, uCell, uStageA; varying vec2 vUv; varying vec2 vWorld;
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main(){
  vec4 ph = texture2D(uPhoto, vUv);
  float py = (1.0 - vUv.y) * ${Ys.toFixed(1)};
  float d = uRevY - py;
  float k = smoothstep(0.0, 230.0, d);
  vec2 cell = floor(vWorld / uCell); vec2 cc = (cell + 0.5) * uCell;
  float kc = clamp(k * 1.25 - 0.25 * h21(cell), 0.0, 1.0);
  float aa = 0.9;
  float rr = kc * (uCell * 0.70711 + aa);
  float cov = clamp((rr - length(vWorld - cc)) / aa, 0.0, 1.0);
  float glow = exp(-pow(d / 48.0, 2.0)) * uRevAmt;
  vec3 col = ph.rgb + vec3(0.55, 0.08, 0.08) * glow * 0.32;
  gl_FragColor = vec4(col, ph.a * cov * uStageA);
}`,_0=new Ie({uniforms:{...wt,uCell:{value:o0}},vertexShader:cu,fragmentShader:g0,transparent:!0,depthTest:!1,depthWrite:!1}),wi=new He(new Kn(1,1),_0);wi.renderOrder=2;wi.frustumCulled=!1;wi.visible=!1;Zs.add(wi);var Fl=520,zl=new tn;{let i=new Float32Array(Fl*3),t=new Float32Array(Fl*4);for(let e=0;e<Fl;e++)t[4*e]=Math.random(),t[4*e+1]=Math.random(),t[4*e+2]=Math.random(),t[4*e+3]=Math.random();zl.setAttribute("position",new Se(i,3)),zl.setAttribute("aSeed",new Se(t,4))}var x0=new Ie({uniforms:wt,...ql,vertexShader:`attribute vec4 aSeed; uniform float uTime, uDpr, uDustAlpha; uniform vec2 uView; varying float vA;
  void main(){
    vec2 p = aSeed.xy;
    p.x = fract(p.x + uTime * (0.0035 + aSeed.z * 0.007) + 0.012 * sin(uTime * 0.31 + aSeed.w * 40.0));
    p.y = fract(p.y + uTime * (0.0025 + aSeed.w * 0.0055) + 0.010 * sin(uTime * 0.23 + aSeed.z * 33.0));
    vec2 w = (p - 0.5) * uView;
    gl_Position = projectionMatrix * viewMatrix * vec4(w, 0.0, 1.0);
    gl_PointSize = uDpr * (1.3 + 2.6 * aSeed.z * aSeed.z);
    vA = uDustAlpha * (0.25 + 0.75 * pow(abs(sin(uTime * 0.5 + aSeed.w * 30.0)), 1.5)) * (0.35 + 0.65 * aSeed.x);
  }`,fragmentShader:`precision highp float; varying float vA;
  void main(){ vec2 c = gl_PointCoord - 0.5; float r2 = dot(c, c) * 4.0; if (r2 > 1.0) discard; float a = pow(1.0 - r2, 2.0);
    gl_FragColor = vec4(vec3(0.62, 0.20, 0.22) * a * vA * 0.42, 1.0); }`}),Yl=new mi(zl,x0);Yl.renderOrder=3;Yl.frustumCulled=!1;Zs.add(Yl);var Ei=null,to=null,nn=1,De=1,Ti=1,An=1,Ai=0,rs=0,ao=0,bi=null,v0={h:100},uu=!1,y0=.135;function du(){let i=document.createElement("canvas"),t=i.getContext("2d"),e=200;t.font=`${e}px Anton`;let n=t.measureText(Nl),s=nn*.965,r=e*s/(n.actualBoundingBoxLeft+n.actualBoundingBoxRight);t.font=`${r}px Anton`;let a=t.measureText(Nl),o=a.actualBoundingBoxAscent+a.actualBoundingBoxDescent,l=nn,c=Math.ceil(o+r*.06);i.width=Math.ceil(l*Ti),i.height=Math.ceil(c*Ti),t.scale(Ti,Ti),t.font=`${r}px Anton`,t.textBaseline="alphabetic";let u=t.createLinearGradient(0,0,0,c);u.addColorStop(0,"rgba(255,255,255,0.95)"),u.addColorStop(.3,"rgba(255,255,255,0.62)"),u.addColorStop(.62,"rgba(255,255,255,0.22)"),u.addColorStop(1,"rgba(255,255,255,0.0)"),t.fillStyle=u;let m=(l-(a.actualBoundingBoxLeft+a.actualBoundingBoxRight))/2+a.actualBoundingBoxLeft;t.fillText(Nl,m,a.actualBoundingBoxAscent+r*.03),bi&&bi.dispose(),bi=new Es(i),bi.colorSpace=en,bi.minFilter=de,bi.generateMipmaps=!1,hu.uniforms.uTex.value=bi,as.scale.set(l,c,1),kl=De/2-y0*De-c/2,as.position.set(0,kl+Js.bdy,-5),v0.h=c}var S0={x:0,s:1,a:1,b:1,r:1,bdy:0},Js=S0,kl=0;function Zl(i){Js=i,wt.uStageS.value=i.s,wt.uShiftX.value=i.x*nn,wt.uStageA.value=i.a;let t=-De/2,e=(Bl/2-iu)*An,n=Ai-Ys/2*An;wi.scale.set(Bl*An*i.s,Ys*An*i.s,1),wi.position.set(e*i.s+i.x*nn,(n-t)*i.s+t,-1),as.position.y=kl+i.bdy}function Ol(){nn=window.innerWidth,De=window.innerHeight,Ti=Math.min(window.devicePixelRatio||1,2),qe.setPixelRatio(Ti),qe.setSize(nn,De,!1);let i=qe.getDrawingBufferSize(new Xt);wt.uRes.value.copy(i),wt.uView.value.set(nn,De),wt.uDpr.value=Ti,ii.left=-nn/2,ii.right=nn/2,ii.top=De/2,ii.bottom=-De/2,ii.updateProjectionMatrix(),ss.setSize(Math.max(2,Math.round(i.x/2)),Math.max(2,Math.round(i.y/2))),An=t0*De/Ys,Ai=e0*De,wt.uS.value=An,wt.uY0.value=Ai,rs=(Ai-De/2)/An,ao=(Ai+De/2)/An,document.documentElement.style.setProperty("--vh",De+"px"),uu&&du(),Zl(Js),is()}var nt={phase:"loading",t:0,time:0,moved:!1,mx:0,my:0,yaw:0,pitch:0,yawSh:0,curAmt:0,revealOn:!1,tau:0,busy:!1,freeze:!1,bi:0,unlocked:!1,ready:!1};window.addEventListener("pointermove",i=>{nt.moved=!0,nt.mx=i.clientX,nt.my=i.clientY},{passive:!0});var Xs=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},ja=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function Gl(i,t,e){qs.textContent=i,qs.disabled=!t,qs.classList.toggle("on",e)}qs.addEventListener("click",()=>{nt.phase!=="live"||nt.busy||(nt.revealOn&&window.scrollTo(0,0),nt.revealOn=!nt.revealOn,nt.busy=!0,qs.disabled=!0)});var M0=i=>.6*i*i*(3-2*i)+.4*i,b0=()=>Math.min(1,Math.max(0,(nt.tau-eo)/no));function fu(i){nt.time+=i,wt.uTime.value=nt.time;let t=nt.time;if(nt.phase==="handoff"){nt.t+=i;let y=Math.min(1,nt.t/r0);wt.uRingAlpha.value=y,so.style.opacity=String(1-y),y>=1&&(so.style.display="none",nt.phase="fly",nt.t=0)}else if(nt.phase==="fly")nt.t+=i,wt.uFly.value=Math.min(1,nt.t/Qa),nt.bi=Xs(.15,.95,nt.t/Qa),wt.uDustAlpha.value=Xs(.1,1,nt.t/Qa),nt.t>=Qa&&(nt.phase="sweep",nt.t=0,wt.uFly.value=1,nt.bi=1);else if(nt.phase==="sweep"){nt.t+=i;let y=Math.min(1,nt.t/s0),f=y*y*(3-2*y)*.35+y*.65;wt.uSweepY.value=rs-90+f*(ao+140-(rs-90)),wt.uSweepAmt.value=Xs(0,.08,y)*(1-Xs(.92,1,y)),y>=1&&(nt.phase="live",wt.uSweepAmt.value=0,wt.uSweepY.value=-9999,Gl("Reveal",!0,!0))}let e=nt.revealOn?eo+no:0;(nt.phase==="live"||nt.phase==="sweep")&&(nt.tau<e?nt.tau=Math.min(e,nt.tau+i):nt.tau>e&&(nt.tau=Math.max(e,nt.tau-i)),nt.busy&&nt.tau===e&&(nt.busy=!1,Gl(nt.revealOn?"Back to dots":"Reveal",!0,!0)));let n=nt.phase==="live";n&&!nt.ready&&(nt.ready=!0,document.documentElement.classList.add("ready"));let s=n&&nt.revealOn&&!nt.busy&&nt.tau>=eo+no-.001;s!==nt.unlocked&&(nt.unlocked=s,document.documentElement.classList.toggle("unlocked",s),s||window.scrollTo(0,0));let r=Jh(window.scrollY||0);Zl(r),wt.uBannerAlpha.value=nt.bi*r.b;let a=b0(),o=Math.min(a,r.r),l=M0(o),c=rs-45,u=ao+345;wt.uRevY.value=o>0?c+l*(u-c):-9999,wt.uRevAmt.value=o>0?1:0,wt.uBandWY.value=o>0?Ai-wt.uRevY.value*An+0:99999,wi.visible=o>0&&r.a>.004;let m=o>=1;Ei&&(Ei.visible=!m,to.visible=!m);let h=!nt.revealOn&&nt.tau<=.001||r.r<=.001?1:0,d,g;if(!nt.moved)d=Math.sin(t*.55)*.17+Math.sin(t*.93+1.3)*.05,g=Math.sin(t*.43+2)*.025;else{let y=nt.mx-nn/2,f=De/2-nt.my;d=n0*Math.max(-1,Math.min(1,y/(nn*.42)));let p=Ai-300*An;g=i0*Math.max(-1,Math.min(1,(f-p)/(De*.5)))}d*=h,g*=h,nt.yaw=ja(nt.yaw,d,3.4,i),nt.pitch=ja(nt.pitch,g,3,i),nt.yawSh=ja(nt.yawSh,d*.2,2.2,i),wt.uYaw.value=nt.yaw,wt.uPitch.value=nt.pitch,wt.uYawSh.value=nt.yawSh,nt.curAmt=ja(nt.curAmt,nt.moved&&h&&nt.phase!=="loading"?1:0,4,i),wt.uCursorAmt.value=nt.curAmt,nt.moved&&wt.uCursor.value.set(nt.mx-nn/2,De/2-nt.my,240),Qh(i)}var Vl=performance.now();function pu(i){requestAnimationFrame(pu);let t=Math.min(.05,(i-Vl)/1e3);Vl=i,nt.freeze||fu(t),mu()}function mu(){Ei&&wt.uBannerAlpha.value>.004&&(qe.setRenderTarget(ss),qe.setClearColor(0,1),qe.clear(),qe.render(au,ii),qe.setRenderTarget(null),qe.setClearColor(328195,1)),qe.render(Zs,ii)}(async function(){Ol(),window.addEventListener("resize",()=>{Ol()}),requestAnimationFrame(a=>{Vl=a,pu(a)});let[t,e]=await Promise.all([nu("dots"),nu("photo")]);await d0(),uu=!0;let n=await h0(e);n.colorSpace=en,n.minFilter=cn,n.magFilter=de,n.generateMipmaps=!0,n.anisotropy=4,n.needsUpdate=!0,wt.uPhoto.value=n;let s=u0(t),r=new tn;r.setAttribute("position",new Se(s.pos,3)),r.setAttribute("aNrm",new Se(s.nrm,3)),r.setAttribute("aRand",new Se(s.rnd,4)),r.setAttribute("aRand2",new Se(s.r2,1)),r.setAttribute("aBr",new Se(s.br,1)),Ei=new mi(r,f0),Ei.frustumCulled=!1,Ei.renderOrder=1,Zs.add(Ei),to=new mi(r,p0),to.frustumCulled=!1,au.add(to),Ol(),du(),Zl(Js),Kh(),is(),ro=1,Xl(1),setTimeout(()=>{nt.phase="handoff",nt.t=0},a0*1e3)})().catch(i=>{console.error(i),ru.firstChild.nodeValue="!"});window.__hero={st:nt,U:wt,update:fu,render:mu,setScroll(i){window.scrollTo(0,i)},stage(){return Js},skipIntro(){nt.phase="live",nt.bi=1,so.style.display="none",wt.uRingAlpha.value=1,wt.uFly.value=1,wt.uBannerAlpha.value=1,wt.uDustAlpha.value=1,wt.uSweepAmt.value=0,Gl("Reveal",!0,!0)},setReveal(i){nt.revealOn=i>0,nt.tau=i<=0?0:eo+i*no,nt.busy=!1},setFly(i){nt.phase="fly",so.style.display="none",wt.uRingAlpha.value=1,wt.uFly.value=i,wt.uBannerAlpha.value=Xs(.15,.95,i),wt.uDustAlpha.value=i,nt.freeze=!0},setSweep(i){nt.phase="sweep",nt.freeze=!0,wt.uFly.value=1,wt.uBannerAlpha.value=1,wt.uDustAlpha.value=1,wt.uSweepY.value=rs-90+i*(ao+140-(rs-90)),wt.uSweepAmt.value=1},yaw(i,t=0){nt.yaw=i,nt.pitch=t,nt.yawSh=i*.2,wt.uYaw.value=i,wt.uPitch.value=t,wt.uYawSh.value=i*.2},readMask(){let i=ss.width,t=ss.height,e=new Uint8Array(i*t*4);qe.readRenderTargetPixels(ss,0,0,i,t,e);let n="",s=8192;for(let r=0;r<e.length;r+=s)n+=String.fromCharCode.apply(null,e.subarray(r,r+s));return{w:i,h:t,b64:btoa(n)}},get phase(){return nt.phase},get progress(){return ro}};})();
