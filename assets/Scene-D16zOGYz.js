import{j as ct,r as Nn,s as bc,l as Ac,a as wc}from"./index-DQ2a5EHx.js";const Fa="187",Rc=0,oo=1,Cc=2,Vr=1,El=2,ki=3,ei=0,Xt=1,tn=2,Ti=0,qi=1,lo=2,co=3,uo=4,Pc=5,yi=100,Lc=101,Dc=102,Nc=103,Ic=104,Uc=200,Fc=201,Oc=202,Bc=203,Tl=204,bl=205,zc=206,Gc=207,Hc=208,Vc=209,kc=210,Wc=211,Xc=212,qc=213,Yc=214,ks=0,Ws=1,Xs=2,Qi=3,qs=4,Ys=5,Zs=6,Js=7,Al=0,Zc=1,Jc=2,Cn=0,wl=1,Rl=2,Cl=3,Oa=4,Pl=5,Ll=6,Dl=7,Nl=300,Ai=301,ji=302,fs=303,ds=304,Ks=1e3,wn=1001,$s=1002,Ut=1003,Kc=1004,pr=1005,Wt=1006,ps=1007,Hn=1008,Kt=1009,Il=1010,Ul=1011,er=1012,Ba=1013,_n=1014,pn=1015,xn=1016,za=1017,Ga=1018,wi=1020,Fl=35902,Ol=35899,Bl=1021,zl=1022,mn=1023,Wn=1026,Vn=1027,Gl=1028,Ha=1029,ti=1030,Va=1031,ka=1033,kr=33776,Wr=33777,Xr=33778,qr=33779,Qs=35840,js=35841,ea=35842,ta=35843,na=36196,ia=37492,ra=37496,sa=37488,aa=37489,$r=37490,oa=37491,la=37808,ca=37809,ua=37810,ha=37811,fa=37812,da=37813,pa=37814,ma=37815,ga=37816,_a=37817,xa=37818,va=37819,Sa=37820,Ma=37821,ya=36492,Ea=36494,Ta=36495,ba=36283,Aa=36284,Qr=36285,wa=36286,$c=3200,Ra=0,Qc=1,Gn="",Jt="srgb",jr="srgb-linear",es="linear",dt="srgb",ms=7680,jc=519,eu=512,tu=513,nu=514,Hl=515,iu=516,ru=517,Vl=518,kl=519,su=35044,ho="300 es",un=2e3,tr=2001;function au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){const i=ts("canvas");return i.style.display="block",i}const fo={};function po(...i){const e="THREE."+i.shift();console.log(e,...i)}function Wl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Wl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Wl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Yr(...i){const e=i.join(" ");e in fo||(fo[e]=!0,Ge(...i))}function lu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const cu={[ks]:ks,[Xs]:Zs,[qs]:qs,[Qi]:Ys,[Ws]:Ws,[Zs]:Xs,[Js]:Js,[Ys]:Qi};class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mo=1234567;const Yi=Math.PI/180,nr=180/Math.PI;function si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Wa(i,e){return(i%e+e)%e}function uu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function hu(i,e,t){return i!==e?(t-i)/(e-i):0}function Zi(i,e,t){return(1-t)*i+t*e}function fu(i,e,t,n){return Zi(i,e,1-Math.exp(-t*n))}function du(i,e=1){return e-Math.abs(Wa(i,e*2)-e)}function pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _u(i,e){return i+Math.random()*(e-i)}function xu(i){return i*(.5-Math.random())}function vu(i){i!==void 0&&(mo=i);let e=mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Su(i){return i*Yi}function Mu(i){return i*nr}function yu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Eu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),p=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*p,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*p,o*c);break;case"ZXZ":i.set(l*p,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*h,o*u,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ql(i,e){if(e.constructor===Float32Array)return i;const t=Xa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Yl(i,e){if(e.constructor===Float32Array)return i;const t=Xa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const go={DEG2RAD:Yi,RAD2DEG:nr,generateUUID:si,clamp:et,euclideanModulo:Wa,mapLinear:uu,inverseLerp:hu,lerp:Zi,damp:fu,pingpong:du,smoothstep:pu,smootherstep:mu,randInt:gu,randFloat:_u,randFloatSpread:xu,seededRandom:vu,degToRad:Su,radToDeg:Mu,isPowerOfTwo:yu,ceilPowerOfTwo:Eu,floorPowerOfTwo:Xl,setQuaternionFromProperEuler:Tu,normalize:Yl,denormalize:ql},no=class no{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};no.prototype.isVector2=!0;let ge=no;class Li{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],p=n[r+3],f=s[a+0],h=s[a+1],_=s[a+2],S=s[a+3];if(p!==S||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+p*S;m<0&&(f=-f,h=-h,_=-_,S=-S,m=-m);let d=1-o;if(m<.9995){const E=Math.acos(m),A=Math.sin(E);d=Math.sin(d*E)/A,o=Math.sin(o*E)/A,l=l*d+f*o,c=c*d+h*o,u=u*d+_*o,p=p*d+S*o}else{l=l*d+f*o,c=c*d+h*o,u=u*d+_*o,p=p*d+S*o;const E=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=E,c*=E,u*=E,p*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],p=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*p+l*h-c*f,e[t+1]=l*_+u*f+c*p-o*h,e[t+2]=c*_+u*h+o*f-l*p,e[t+3]=u*_-o*p-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),p=o(s/2),f=l(n/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*p+c*h*_,this._y=c*h*p-f*u*_,this._z=c*u*_+f*h*p,this._w=c*u*p-f*h*_;break;case"YXZ":this._x=f*u*p+c*h*_,this._y=c*h*p-f*u*_,this._z=c*u*_-f*h*p,this._w=c*u*p+f*h*_;break;case"ZXY":this._x=f*u*p-c*h*_,this._y=c*h*p+f*u*_,this._z=c*u*_+f*h*p,this._w=c*u*p-f*h*_;break;case"ZYX":this._x=f*u*p-c*h*_,this._y=c*h*p+f*u*_,this._z=c*u*_-f*h*p,this._w=c*u*p+f*h*_;break;case"YZX":this._x=f*u*p+c*h*_,this._y=c*h*p+f*u*_,this._z=c*u*_-f*h*p,this._w=c*u*p-f*h*_;break;case"XZY":this._x=f*u*p-c*h*_,this._y=c*h*p-f*u*_,this._z=c*u*_+f*h*p,this._w=c*u*p+f*h*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],p=t[10],f=n+o+p;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>p){const h=2*Math.sqrt(1+n-o-p);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-n-p);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+p-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const io=class io{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+l*c+a*p-o*u,this.y=n+l*u+o*c-s*p,this.z=r+l*p+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gs.copy(this).projectOnVector(e),this.sub(gs)}reflect(e){return this.sub(gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};io.prototype.isVector3=!0;let I=io;const gs=new I,_o=new Li,ro=class ro{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],f=n[2],h=n[5],_=n[8],S=r[0],m=r[3],d=r[6],E=r[1],A=r[4],M=r[7],w=r[2],b=r[5],g=r[8];return s[0]=a*S+o*E+l*w,s[3]=a*m+o*A+l*b,s[6]=a*d+o*M+l*g,s[1]=c*S+u*E+p*w,s[4]=c*m+u*A+p*b,s[7]=c*d+u*M+p*g,s[2]=f*S+h*E+_*w,s[5]=f*m+h*A+_*b,s[8]=f*d+h*M+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*p+n*f+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*c-u*n)*S,e[2]=(o*n-r*a)*S,e[3]=f*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=h*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_s.makeScale(e,t)),this}rotate(e){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_s.makeRotation(-e)),this}translate(e,t){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ro.prototype.isMatrix3=!0;let We=ro;const _s=new We,xo=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bu(){const i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Pn(r.r),r.g=Pn(r.g),r.b=Pn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?es:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:e,whitePoint:n,transfer:es,toXYZ:xo,fromXYZ:vo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:xo,fromXYZ:vo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const rt=bu();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ui;class Au{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ui===void 0&&(ui=ts("canvas")),ui.width=e.width,ui.height=e.height;const r=ui.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wu=0;class qa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xs(r[a].image)):s.push(xs(r[a]))}else s=xs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Au.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Ru=0;const vs=new I;class Ht extends ri{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=wn,r=wn,s=Wt,a=Hn,o=mn,l=Kt,c=Ht.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=si(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vs).x}get height(){return this.source.getSize(vs).y}get depth(){return this.source.getSize(vs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Nl;Ht.DEFAULT_ANISOTROPY=1;const so=class so{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],f=l[1],h=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(h+1)/2,w=(d+1)/2,b=(u+f)/4,g=(p+S)/4,y=(_+m)/4;return A>M&&A>w?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=b/n,s=g/n):M>w?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=y/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=g/s,r=y/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-_)*(m-_)+(p-S)*(p-S)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(p-S)/E,this.z=(f-u)/E,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};so.prototype.isVector4=!0;let yt=so;class Cu extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Ht({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Cu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zl extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const os=class os{constructor(e,t,n,r,s,a,o,l,c,u,p,f,h,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,p,f,h,_,S,m)}set(e,t,n,r,s,a,o,l,c,u,p,f,h,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=f,d[3]=h,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new os().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*p,_=o*u,S=o*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=h+_*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*p,_=c*u,S=c*p;t[0]=f+S*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*p,_=c*u,S=c*p;t[0]=f-S*o,t[4]=-a*p,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*p,_=o*u,S=o*p;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+S,t[1]=l*p,t[5]=S*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-f*p,t[8]=_*p+h,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*p+_,t[10]=f-S*p}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=f*p+S,t[5]=a*u,t[9]=h*p-_,t[2]=_*p-h,t[6]=o*u,t[10]=S*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Du)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),In.crossVectors(n,Yt),In.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),In.crossVectors(n,Yt)),In.normalize(),mr.crossVectors(Yt,In),r[0]=In.x,r[4]=mr.x,r[8]=Yt.x,r[1]=In.y,r[5]=mr.y,r[9]=Yt.y,r[2]=In.z,r[6]=mr.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],f=n[9],h=n[13],_=n[2],S=n[6],m=n[10],d=n[14],E=n[3],A=n[7],M=n[11],w=n[15],b=r[0],g=r[4],y=r[8],U=r[12],P=r[1],D=r[5],z=r[9],X=r[13],C=r[2],H=r[6],G=r[10],V=r[14],ie=r[3],W=r[7],K=r[11],te=r[15];return s[0]=a*b+o*P+l*C+c*ie,s[4]=a*g+o*D+l*H+c*W,s[8]=a*y+o*z+l*G+c*K,s[12]=a*U+o*X+l*V+c*te,s[1]=u*b+p*P+f*C+h*ie,s[5]=u*g+p*D+f*H+h*W,s[9]=u*y+p*z+f*G+h*K,s[13]=u*U+p*X+f*V+h*te,s[2]=_*b+S*P+m*C+d*ie,s[6]=_*g+S*D+m*H+d*W,s[10]=_*y+S*z+m*G+d*K,s[14]=_*U+S*X+m*V+d*te,s[3]=E*b+A*P+M*C+w*ie,s[7]=E*g+A*D+M*H+w*W,s[11]=E*y+A*z+M*G+w*K,s[15]=E*U+A*X+M*V+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],f=e[10],h=e[14],_=e[3],S=e[7],m=e[11],d=e[15],E=l*h-c*f,A=o*h-c*p,M=o*f-l*p,w=a*h-c*u,b=a*f-l*u,g=a*p-o*u;return t*(S*E-m*A+d*M)-n*(_*E-m*w+d*b)+r*(_*A-S*w+d*g)-s*(_*M-S*b+m*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],f=e[10],h=e[11],_=e[12],S=e[13],m=e[14],d=e[15],E=t*o-n*a,A=t*l-r*a,M=t*c-s*a,w=n*l-r*o,b=n*c-s*o,g=r*c-s*l,y=u*S-p*_,U=u*m-f*_,P=u*d-h*_,D=p*m-f*S,z=p*d-h*S,X=f*d-h*m,C=E*X-A*z+M*D+w*P-b*U+g*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/C;return e[0]=(o*X-l*z+c*D)*H,e[1]=(r*z-n*X-s*D)*H,e[2]=(S*g-m*b+d*w)*H,e[3]=(f*b-p*g-h*w)*H,e[4]=(l*P-a*X-c*U)*H,e[5]=(t*X-r*P+s*U)*H,e[6]=(m*M-_*g-d*A)*H,e[7]=(u*g-f*M+h*A)*H,e[8]=(a*z-o*P+c*y)*H,e[9]=(n*P-t*z-s*y)*H,e[10]=(_*b-S*M+d*E)*H,e[11]=(p*M-u*b-h*E)*H,e[12]=(o*U-a*D-l*y)*H,e[13]=(t*D-n*U+r*y)*H,e[14]=(S*A-_*w-m*E)*H,e[15]=(u*w-p*A+f*E)*H,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,p=o+o,f=s*c,h=s*u,_=s*p,S=a*u,m=a*p,d=o*p,E=l*c,A=l*u,M=l*p,w=n.x,b=n.y,g=n.z;return r[0]=(1-(S+d))*w,r[1]=(h+M)*w,r[2]=(_-A)*w,r[3]=0,r[4]=(h-M)*b,r[5]=(1-(f+d))*b,r[6]=(m+E)*b,r[7]=0,r[8]=(_+A)*g,r[9]=(m-E)*g,r[10]=(1-(f+S))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=hi.set(r[0],r[1],r[2]).length();const o=hi.set(r[4],r[5],r[6]).length(),l=hi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),sn.copy(this);const c=1/a,u=1/o,p=1/l;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=p,sn.elements[9]*=p,sn.elements[10]*=p,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=un,l=!1){const c=this.elements,u=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===un)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===tr)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=un,l=!1){const c=this.elements,u=2/(t-e),p=2/(n-r),f=-(t+e)/(t-e),h=-(n+r)/(n-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===un)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===tr)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};os.prototype.isMatrix4=!0;let gt=os;const hi=new I,sn=new gt,Lu=new I(0,0,0),Du=new I(1,1,1),In=new I,mr=new I,Yt=new I,So=new gt,Mo=new Li;class Xn{constructor(e=0,t=0,n=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],p=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return So.makeRotationFromQuaternion(e),this.setFromRotationMatrix(So,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nu=0;const yo=new I,fi=new Li,yn=new gt,gr=new I,Oi=new I,Iu=new I,Uu=new Li,Eo=new I(1,0,0),To=new I(0,1,0),bo=new I(0,0,1),Ao={type:"added"},Fu={type:"removed"},di={type:"childadded",child:null},Ss={type:"childremoved",child:null};class Rt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,t=new Xn,n=new Li,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(To,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return yo.copy(e).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(To,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Oi,gr,this.up):yn.lookAt(gr,Oi,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(yn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ao),di.child=e,this.dispatchEvent(di),di.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ao),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ei extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ou={type:"move"};class Ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=u.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ys(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=Wa(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ys(a,s,e+1/3),this.g=ys(a,s,e),this.b=ys(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=Jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return rt.workingToColorSpace(zt.copy(this),e),Math.round(et(zt.r*255,0,255))*65536+Math.round(et(zt.g*255,0,255))*256+Math.round(et(zt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,s=zt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Jt){rt.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(_r);const n=Zi(Un.h,_r.h,t),r=Zi(Un.s,_r.s,t),s=Zi(Un.l,_r.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Qe;Qe.NAMES=Jl;let Bu=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};const an=new I,En=new I,Es=new I,Tn=new I,pi=new I,mi=new I,wo=new I,Ts=new I,bs=new I,As=new I,ws=new yt,Rs=new yt,Cs=new yt;class cn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),En.subVectors(n,t),Es.subVectors(e,t);const a=an.dot(an),o=an.dot(En),l=an.dot(Es),c=En.dot(En),u=En.dot(Es),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ws.setScalar(0),Rs.setScalar(0),Cs.setScalar(0),ws.fromBufferAttribute(e,t),Rs.fromBufferAttribute(e,n),Cs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ws,s.x),a.addScaledVector(Rs,s.y),a.addScaledVector(Cs,s.z),a}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),En.subVectors(e,t),an.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;pi.subVectors(r,n),mi.subVectors(s,n),Ts.subVectors(e,n);const l=pi.dot(Ts),c=mi.dot(Ts);if(l<=0&&c<=0)return t.copy(n);bs.subVectors(e,r);const u=pi.dot(bs),p=mi.dot(bs);if(u>=0&&p<=u)return t.copy(r);const f=l*p-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(pi,a);As.subVectors(e,s);const h=pi.dot(As),_=mi.dot(As);if(_>=0&&h<=_)return t.copy(s);const S=h*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(mi,o);const m=u*_-h*p;if(m<=0&&p-u>=0&&h-_>=0)return wo.subVectors(s,r),o=(p-u)/(p-u+(h-_)),t.copy(r).addScaledVector(wo,o);const d=1/(m+S+f);return a=S*d,o=f*d,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class or{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),vr.subVectors(this.max,Bi),gi.subVectors(e.a,Bi),_i.subVectors(e.b,Bi),xi.subVectors(e.c,Bi),Fn.subVectors(_i,gi),On.subVectors(xi,_i),Jn.subVectors(gi,xi);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Jn.z,Jn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Jn.z,0,-Jn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Jn.y,Jn.x,0];return!Ps(t,gi,_i,xi,vr)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,gi,_i,xi,vr))?!1:(Sr.crossVectors(Fn,On),t=[Sr.x,Sr.y,Sr.z],Ps(t,gi,_i,xi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,xr=new or,gi=new I,_i=new I,xi=new I,Fn=new I,On=new I,Jn=new I,Bi=new I,vr=new I,Sr=new I,Kn=new I;function Ps(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Kn.fromArray(i,s);const o=r.x*Math.abs(Kn.x)+r.y*Math.abs(Kn.y)+r.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const At=new I,Mr=new ge;let zu=0;class Ln extends ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=pn,this.version=0,this._normalizationScale=e!==void 0?Xa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ql(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yl(e,this.array)}}class Kl extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $l extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Gu=new or,zi=new I,Ls=new I;class lr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(Ls)),this.expandByPoint(zi.copy(e.center).sub(Ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hu=0;const jt=new gt,Ds=new Rt,vi=new I,Zt=new or,Gi=new or,Dt=new I;class wt extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(au(e)?$l:Kl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Ds.lookAt(e),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Zt.min,Gi.min),Zt.expandByPoint(Dt),Dt.addVectors(Zt.max,Gi.max),Zt.expandByPoint(Dt)):(Zt.expandByPoint(Gi.min),Zt.expandByPoint(Gi.max))}Zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),Dt.add(vi)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new I,l[U]=new I;const u=new I,p=new I,f=new I,h=new ge,_=new ge,S=new ge,m=new I,d=new I;function E(U,P,D){c[U]=c[P]=c[D]=1,u.fromBufferAttribute(n,U),p.fromBufferAttribute(n,P),f.fromBufferAttribute(n,D),h.fromBufferAttribute(s,U),_.fromBufferAttribute(s,P),S.fromBufferAttribute(s,D),p.sub(u),f.sub(u),_.sub(h),S.sub(h);const z=1/(_.x*S.y-S.x*_.y);isFinite(z)&&(m.copy(p).multiplyScalar(S.y).addScaledVector(f,-_.y).multiplyScalar(z),d.copy(f).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(z),o[U].add(m),o[P].add(m),o[D].add(m),l[U].add(d),l[P].add(d),l[D].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,P=A.length;U<P;++U){const D=A[U],z=D.start,X=D.count;for(let C=z,H=z+X;C<H;C+=3)E(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const M=new I,w=new I,b=new I,g=new I;function y(U){b.fromBufferAttribute(r,U),g.copy(b);const P=o[U];M.copy(P),M.sub(b.multiplyScalar(b.dot(P))).normalize(),w.crossVectors(g,P);const z=w.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,z)}for(let U=0,P=n.count;U<P;++U)c[U]&&y(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,p=new I;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,p=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?h=l[S]*o.data.stride+o.offset:h=l[S]*u;for(let d=0;d<u;d++)f[_++]=c[h++]}return new Ln(f,u,p)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,f=c.length;p<f;p++){const h=c[p];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let f=0,h=p.length;f<h;f++)u.push(p[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ns=new I,Vu=new I,ku=new We;class zn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ns.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ns),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ku.getNormalMatrix(e),r=this.coplanarPoint(Ns).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wu=0;class ai extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=si(),this.name="",this.type="Material",this.blending=qi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=bl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const An=new I,Is=new I,yr=new I,Er=new I;class ls{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Is.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(Is);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Er.dot(this.direction),l=-Er.dot(yr),c=Er.lengthSq(),u=Math.abs(1-a*a);let p,f,h,_;if(u>0)if(p=a*l-o,f=a*o-l,_=s*u,p>=0)if(f>=-_)if(f<=_){const S=1/u;p*=S,f*=S,h=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),h=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Is).addScaledVector(yr,f),h}intersectSphere(e,t){if(e.radius<0)return null;An.subVectors(e.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=e.x-a.x,f=e.y-a.y,h=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,d=n.x-a.x,E=n.y-a.y,A=n.z-a.z,M=Math.abs(l),w=Math.abs(c),b=Math.abs(u);let g,y,U,P,D,z,X,C,H,G,V,ie;if(M>=w&&M>=b?(U=l,z=p,H=_,ie=d,l>=0?(g=c,y=u,P=f,D=h,X=S,C=m,G=E,V=A):(g=u,y=c,P=h,D=f,X=m,C=S,G=A,V=E)):w>=b?(U=c,z=f,H=S,ie=E,c>=0?(g=u,y=l,P=h,D=p,X=m,C=_,G=A,V=d):(g=l,y=u,P=p,D=h,X=_,C=m,G=d,V=A)):(U=u,z=h,H=m,ie=A,u>=0?(g=l,y=c,P=p,D=f,X=_,C=S,G=d,V=E):(g=c,y=l,P=f,D=p,X=S,C=_,G=E,V=d)),U===0)return null;const W=g/U,K=y/U,te=1/U,be=P-W*z,Fe=D-K*z,J=X-W*H,_e=C-K*H,Ae=G-W*ie,Ue=V-K*ie,Se=Ae*_e-Ue*J,Oe=be*Ue-Fe*Ae,ht=J*Fe-_e*be;if(r){if(Se<0||Oe<0||ht<0)return null}else if((Se<0||Oe<0||ht<0)&&(Se>0||Oe>0||ht>0))return null;const ze=Se+Oe+ht;if(ze===0)return null;const Xe=te*(Se*z+Oe*H+ht*ie);return(ze>0?Xe<0:Xe>0)?null:this.at(Xe/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jn extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ro=new gt,$n=new ls,Tr=new lr,Co=new I,br=new I,Ar=new I,wr=new I,Us=new I,Rr=new I,Po=new I,Cr=new I;class Gt extends Rt{constructor(e=new wt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(Us.fromBufferAttribute(p,e),a?Rr.addScaledVector(Us,u):Rr.addScaledVector(Us.sub(t),u))}t.add(Rr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Tr.containsPoint($n.origin)===!1&&($n.intersectSphere(Tr,Co)===null||$n.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(Ro.copy(s).invert(),$n.copy(e.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],d=a[m.materialIndex],E=Math.max(m.start,h.start),A=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,w=A;M<w;M+=3){const b=o.getX(M),g=o.getX(M+1),y=o.getX(M+2);r=Pr(this,d,e,n,c,u,p,b,g,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(o.count,h.start+h.count);for(let m=_,d=S;m<d;m+=3){const E=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);r=Pr(this,a,e,n,c,u,p,E,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],d=a[m.materialIndex],E=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,w=A;M<w;M+=3){const b=M,g=M+1,y=M+2;r=Pr(this,d,e,n,c,u,p,b,g,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),S=Math.min(l.count,h.start+h.count);for(let m=_,d=S;m<d;m+=3){const E=m,A=m+1,M=m+2;r=Pr(this,a,e,n,c,u,p,E,A,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Xu(i,e,t,n,r,s,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===ei,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:i}}function Pr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,br),i.getVertexPosition(l,Ar),i.getVertexPosition(c,wr);const u=Xu(i,e,t,n,br,Ar,wr,Po);if(u){const p=new I;cn.getBarycoord(Po,br,Ar,wr,p),r&&(u.uv=cn.getInterpolatedAttribute(r,o,l,c,p,new ge)),s&&(u.uv1=cn.getInterpolatedAttribute(s,o,l,c,p,new ge)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,l,c,p,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};cn.getNormal(br,Ar,wr,f.normal),u.face=f,u.barycoord=p}return u}class qu extends Ht{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Ut,u=Ut,p,f){super(null,a,o,l,c,u,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qn=new lr,Yu=new ge(.5,.5),Lr=new I;class ir{constructor(e=new zn,t=new zn,n=new zn,r=new zn,s=new zn,a=new zn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],p=s[5],f=s[6],h=s[7],_=s[8],S=s[9],m=s[10],d=s[11],E=s[12],A=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-a,h-u,d-_,w-E).normalize(),r[1].setComponents(c+a,h+u,d+_,w+E).normalize(),r[2].setComponents(c+o,h+p,d+S,w+A).normalize(),r[3].setComponents(c-o,h-p,d-S,w-A).normalize(),n)r[4].setComponents(l,f,m,M).normalize(),r[5].setComponents(c-l,h-f,d-m,w-M).normalize();else if(r[4].setComponents(c-l,h-f,d-m,w-M).normalize(),t===un)r[5].setComponents(c+l,h+f,d+m,w+M).normalize();else if(t===tr)r[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Yu.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Lr.x=r.normal.x>0?e.max.x:e.min.x,Lr.y=r.normal.y>0?e.max.y:e.min.y,Lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Lo=new gt;class Za{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Lo.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new ir),n[r].setFromProjectionMatrix(Lo,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ir),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Za().copy(this)}}class Zr extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ns=new I,is=new I,Do=new gt,Hi=new ls,Dr=new lr,Fs=new I,No=new I;class Jr extends Rt{constructor(e=new wt,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ns.fromBufferAttribute(t,r-1),is.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ns.distanceTo(is);e.setAttribute("lineDistance",new pt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Dr.radius+=s,e.ray.intersectsSphere(Dr)===!1)return;Do.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Do);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=c){const d=u.getX(S),E=u.getX(S+1),A=Nr(this,e,Hi,l,d,E,S);A&&t.push(A)}if(this.isLineLoop){const S=u.getX(_-1),m=u.getX(h),d=Nr(this,e,Hi,l,S,m,_-1);d&&t.push(d)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=h,m=_-1;S<m;S+=c){const d=Nr(this,e,Hi,l,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=Nr(this,e,Hi,l,_-1,h,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(ns.fromBufferAttribute(o,r),is.fromBufferAttribute(o,s),t.distanceSqToSegment(ns,is,Fs,No)>n)return;Fs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Fs);if(!(c<e.near||c>e.far))return{distance:c,point:No.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Io=new I,Uo=new I;class Zu extends Jr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Io.fromBufferAttribute(t,r),Uo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Io.distanceTo(Uo);e.setAttribute("lineDistance",new pt(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ql extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fo=new gt,Ca=new ls,Ir=new lr,Ur=new I;class Oo extends Rt{constructor(e=new wt,t=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Fo.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(Fo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=f,S=h;_<S;_++){const m=c.getX(_);Ur.fromBufferAttribute(p,m),Bo(Ur,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(p.count,a.start+a.count);for(let _=f,S=h;_<S;_++)Ur.fromBufferAttribute(p,_),Bo(Ur,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bo(i,e,t,n,r,s,a){const o=Ca.distanceSqToPoint(i);if(o<t){const l=new I;Ca.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class jl extends Ht{constructor(e=[],t=Ai,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends Ht{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ri extends Ht{constructor(e,t,n=_n,r,s,a,o=Ut,l=Ut,c,u=Wn,p=1){if(u!==Wn&&u!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:p};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ec extends Ri{constructor(e,t=_n,n=Ai,r,s,a=Ut,o=Ut,l,c=Wn){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tc extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kn extends wt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function _(S,m,d,E,A,M,w,b,g,y,U){const P=M/g,D=w/y,z=M/2,X=w/2,C=b/2,H=g+1,G=y+1;let V=0,ie=0;const W=new I;for(let K=0;K<G;K++){const te=K*D-X;for(let be=0;be<H;be++){const Fe=be*P-z;W[S]=Fe*E,W[m]=te*A,W[d]=C,c.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[d]=b>0?1:-1,u.push(W.x,W.y,W.z),p.push(be/g),p.push(1-K/y),V+=1}}for(let K=0;K<y;K++)for(let te=0;te<g;te++){const be=f+te+H*K,Fe=f+te+H*(K+1),J=f+(te+1)+H*(K+1),_e=f+(te+1)+H*K;l.push(be,Fe,_e),l.push(Fe,J,_e),ie+=6}o.addGroup(h,ie,U),h+=ie,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ja extends wt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new I,u=new ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){const h=n+p/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ln extends wt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],f=[],h=[];let _=0;const S=[],m=n/2;let d=0;E(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(h,2));function E(){const M=new I,w=new I;let b=0;const g=(t-e)/n;for(let y=0;y<=s;y++){const U=[],P=y/s,D=P*(t-e)+e;for(let z=0;z<=r;z++){const X=z/r,C=X*l+o,H=Math.sin(C),G=Math.cos(C);w.x=D*H,w.y=-P*n+m,w.z=D*G,p.push(w.x,w.y,w.z),M.set(H,g,G).normalize(),f.push(M.x,M.y,M.z),h.push(X,1-P),U.push(_++)}S.push(U)}for(let y=0;y<r;y++)for(let U=0;U<s;U++){const P=S[U][y],D=S[U+1][y],z=S[U+1][y+1],X=S[U][y+1];(e>0||U!==0)&&(u.push(P,D,X),b+=3),(t>0||U!==s-1)&&(u.push(D,z,X),b+=3)}c.addGroup(d,b,0),d+=b}function A(M){const w=_,b=new ge,g=new I;let y=0;const U=M===!0?e:t,P=M===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,m*P,0),f.push(0,P,0),h.push(.5,.5),_++;const D=_;for(let z=0;z<=r;z++){const C=z/r*l+o,H=Math.cos(C),G=Math.sin(C);g.x=U*G,g.y=m*P,g.z=U*H,p.push(g.x,g.y,g.z),f.push(0,P,0),b.x=H*.5+.5,b.y=G*.5*P+.5,h.push(b.x,b.y),_++}for(let z=0;z<r;z++){const X=w+z,C=D+z;M===!0?u.push(C,C+1,X):u.push(C+1,C,X),y+=3}c.addGroup(d,y,M===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ka extends ln{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ka(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,h=(a-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ge:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,r=[],s=[],a=[],o=new I,l=new gt;for(let h=0;h<=e;h++){const _=h/e;r[h]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(et(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,_))}a[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(et(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],h*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class cs extends vn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*p+this.aX,c=f*p+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ku extends cs{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,p){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+p)+(l-o)/p;f*=u,h*=u,r(a,o,f,h)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const zo=new I,Go=new I,Os=new $a,Bs=new $a,zs=new $a;class $u extends vn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Go.subVectors(r[0],r[1]).add(r[0]),c=Go);const p=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(zo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(p),h),S=Math.pow(p.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Os.initNonuniformCatmullRom(c.x,p.x,f.x,u.x,_,S,m),Bs.initNonuniformCatmullRom(c.y,p.y,f.y,u.y,_,S,m),zs.initNonuniformCatmullRom(c.z,p.z,f.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(Os.initCatmullRom(c.x,p.x,f.x,u.x,this.tension),Bs.initCatmullRom(c.y,p.y,f.y,u.y,this.tension),zs.initCatmullRom(c.z,p.z,f.z,u.z,this.tension));return n.set(Os.calc(l),Bs.calc(l),zs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ho(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Qu(i,e){const t=1-i;return t*t*e}function ju(i,e){return 2*(1-i)*i*e}function eh(i,e){return i*i*e}function Ji(i,e,t,n){return Qu(i,e)+ju(i,t)+eh(i,n)}function th(i,e){const t=1-i;return t*t*t*e}function nh(i,e){const t=1-i;return 3*t*t*i*e}function ih(i,e){return 3*(1-i)*i*i*e}function rh(i,e){return i*i*i*e}function Ki(i,e,t,n,r){return th(i,e)+nh(i,t)+ih(i,n)+rh(i,r)}class nc extends vn{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,s.x,a.x,o.x),Ki(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sh extends vn{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ki(e,r.x,s.x,a.x,o.x),Ki(e,r.y,s.y,a.y,o.y),Ki(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ic extends vn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends vn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rc extends vn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ji(e,r.x,s.x,a.x),Ji(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends vn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ji(e,r.x,s.x,a.x),Ji(e,r.y,s.y,a.y),Ji(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sc extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return n.set(Ho(o,l.x,c.x,u.x,p.x),Ho(o,l.y,c.y,u.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var Pa=Object.freeze({__proto__:null,ArcCurve:Ku,CatmullRomCurve3:$u,CubicBezierCurve:nc,CubicBezierCurve3:sh,EllipseCurve:cs,LineCurve:ic,LineCurve3:ah,QuadraticBezierCurve:rc,QuadraticBezierCurve3:oh,SplineCurve:sc});class lh extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Pa[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class Vo extends lh{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ic(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new rc(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new nc(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new cs(e,t,n,r,s,a,o,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rs extends Vo{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Vo().fromJSON(r))}return this}}function ch(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=ac(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=ph(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let u=o,p=l;for(let f=t;f<r;f+=t){const h=i[f],_=i[f+1];h<o&&(o=h),_<l&&(l=_),h>u&&(u=h),_>p&&(p=_)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return rr(s,a,t,o,l,c,0),a}function ac(i,e,t,n,r){let s;if(r===bh(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=ko(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=ko(a/n|0,i[a],i[a+1],s);return s&&Ci(s,s.next)&&(ar(s),s=s.next),s}function ni(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ci(t,t.next)||Et(t.prev,t,t.next)===0)){if(ar(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function rr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&vh(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?hh(i,n,r,s):uh(i)){e.push(l.i,i.i,c.i),ar(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=fh(ni(i),e),rr(i,e,t,n,r,s,2)):a===2&&dh(i,e,t,n,r,s):rr(ni(i),e,t,n,r,s,1);break}}}function uh(i){const e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),p=Math.min(o,l,c),f=Math.max(r,s,a),h=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=p&&_.y<=h&&Wi(r,o,s,l,a,c,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hh(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Et(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,p=s.y,f=a.y,h=Math.min(o,l,c),_=Math.min(u,p,f),S=Math.max(o,l,c),m=Math.max(u,p,f),d=La(h,_,e,t,n),E=La(S,m,e,t,n);let A=i.prevZ,M=i.nextZ;for(;A&&A.z>=d&&M&&M.z<=E;){if(A.x>=h&&A.x<=S&&A.y>=_&&A.y<=m&&A!==r&&A!==a&&Wi(o,u,l,p,c,f,A.x,A.y)&&Et(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=h&&M.x<=S&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&Wi(o,u,l,p,c,f,M.x,M.y)&&Et(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=d;){if(A.x>=h&&A.x<=S&&A.y>=_&&A.y<=m&&A!==r&&A!==a&&Wi(o,u,l,p,c,f,A.x,A.y)&&Et(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=E;){if(M.x>=h&&M.x<=S&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&Wi(o,u,l,p,c,f,M.x,M.y)&&Et(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fh(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Ci(n,r)&&lc(n,t,t.next,r)&&sr(n,r)&&sr(r,n)&&(e.push(n.i,t.i,r.i),ar(t),ar(t.next),t=i=r),t=t.next}while(t!==i);return ni(t)}function dh(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yh(a,o)){let l=cc(a,o);a=ni(a,a.next),l=ni(l,l.next),rr(a,e,t,n,r,s,0),rr(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function ph(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=ac(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Mh(c))}r.sort(mh);for(let s=0;s<r.length;s++)t=gh(r[s],t);return t}function mh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function gh(i,e){const t=_h(i,e);if(!t)return e;const n=cc(t,i);return ni(n,n.next),ni(t,t.next)}function _h(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Ci(i,t))return t;do{if(Ci(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,a=t.x<t.next.x?t:t.next,p===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&oc(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const p=Math.abs(r-t.y)/(n-t.x);sr(t,i)&&(p<u||p===u&&(t.x>a.x||t.x===a.x&&xh(a,t)))&&(a=t,u=p)}t=t.next}while(t!==o);return a}function xh(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function vh(i,e,t,n){let r=i;do r.z===0&&(r.z=La(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Sh(r)}function Sh(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function La(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Mh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oc(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Wi(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&oc(i,e,t,n,r,s,a,o)}function yh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Eh(i,e)&&(sr(i,e)&&sr(e,i)&&Th(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||Ci(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ci(i,e){return i.x===e.x&&i.y===e.y}function lc(i,e,t,n){const r=Or(Et(i,e,t)),s=Or(Et(i,e,n)),a=Or(Et(t,n,i)),o=Or(Et(t,n,e));return!!(r!==s&&a!==o||r===0&&Fr(i,t,e)||s===0&&Fr(i,n,e)||a===0&&Fr(t,i,n)||o===0&&Fr(t,e,n))}function Fr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Or(i){return i>0?1:i<0?-1:0}function Eh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&lc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sr(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Th(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cc(i,e){const t=Da(i.i,i.x,i.y),n=Da(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ko(i,e,t,n){const r=Da(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Da(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bh(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Ah{static triangulate(e,t,n=2){return ch(e,t,n)}}class Rn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Rn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Wo(e),Xo(n,e);let a=e.length;t.forEach(Wo);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Xo(n,t[l]);const o=Ah.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Wo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Qa extends wt{constructor(e=new rs([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new pt(r,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:h-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:wh;let A,M=!1,w,b,g,y;if(d){A=d.getSpacedPoints(u),M=!0,f=!1;const ee=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(u,ee),b=new I,g=new I,y=new I}f||(m=0,h=0,_=0,S=0);const U=o.extractPoints(c);let P=U.shape;const D=U.holes;if(!Rn.isClockWise(P)){P=P.reverse();for(let ee=0,he=D.length;ee<he;ee++){const oe=D[ee];Rn.isClockWise(oe)&&(D[ee]=oe.reverse())}}function X(ee){const oe=10000000000000001e-36;let ve=ee[0];for(let xe=1;xe<=ee.length;xe++){const He=xe%ee.length,Le=ee[He],Ke=Le.x-ve.x,je=Le.y-ve.y,it=Ke*Ke+je*je,N=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(ve.x),Math.abs(ve.y)),xt=oe*N*N;if(it<=xt){ee.splice(He,1),xe--;continue}ve=Le}}X(P),D.forEach(X);const C=D.length,H=P;for(let ee=0;ee<C;ee++){const he=D[ee];P=P.concat(he)}function G(ee,he,oe){return he||ot("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(he,oe)}const V=P.length;function ie(ee,he,oe){let ve,xe,He;const Le=ee.x-he.x,Ke=ee.y-he.y,je=oe.x-ee.x,it=oe.y-ee.y,N=Le*Le+Ke*Ke,xt=Le*it-Ke*je;if(Math.abs(xt)>Number.EPSILON){const Je=Math.sqrt(N),ft=Math.sqrt(je*je+it*it),de=he.x-Ke/Je,vt=he.y+Le/Je,Be=oe.x-it/ft,Ve=oe.y+je/ft,T=((Be-de)*it-(Ve-vt)*je)/(Le*it-Ke*je);ve=de+Le*T-ee.x,xe=vt+Ke*T-ee.y;const x=ve*ve+xe*xe;if(x<=2)return new ge(ve,xe);He=Math.sqrt(x/2)}else{let Je=!1;Le>Number.EPSILON?je>Number.EPSILON&&(Je=!0):Le<-Number.EPSILON?je<-Number.EPSILON&&(Je=!0):Math.sign(Ke)===Math.sign(it)&&(Je=!0),Je?(ve=-Ke,xe=Le,He=Math.sqrt(N)):(ve=Le,xe=Ke,He=Math.sqrt(N/2))}return new ge(ve/He,xe/He)}const W=[];for(let ee=0,he=H.length,oe=he-1,ve=ee+1;ee<he;ee++,oe++,ve++)oe===he&&(oe=0),ve===he&&(ve=0),W[ee]=ie(H[ee],H[oe],H[ve]);const K=[];let te,be=W.concat();for(let ee=0,he=C;ee<he;ee++){const oe=D[ee];te=[];for(let ve=0,xe=oe.length,He=xe-1,Le=ve+1;ve<xe;ve++,He++,Le++)He===xe&&(He=0),Le===xe&&(Le=0),te[ve]=ie(oe[ve],oe[He],oe[Le]);K.push(te),be=be.concat(te)}let Fe;if(m===0)Fe=Rn.triangulateShape(H,D);else{const ee=[],he=[];for(let oe=0;oe<m;oe++){const ve=oe/m,xe=h*Math.cos(ve*Math.PI/2),He=_*Math.sin(ve*Math.PI/2)+S;for(let Le=0,Ke=H.length;Le<Ke;Le++){const je=G(H[Le],W[Le],He);Oe(je.x,je.y,-xe),ve===0&&ee.push(je)}for(let Le=0,Ke=C;Le<Ke;Le++){const je=D[Le];te=K[Le];const it=[];for(let N=0,xt=je.length;N<xt;N++){const Je=G(je[N],te[N],He);Oe(Je.x,Je.y,-xe),ve===0&&it.push(Je)}ve===0&&he.push(it)}}Fe=Rn.triangulateShape(ee,he)}const J=Fe.length,_e=_+S;for(let ee=0;ee<V;ee++){const he=f?G(P[ee],be[ee],_e):P[ee];M?(g.copy(w.normals[0]).multiplyScalar(he.x),b.copy(w.binormals[0]).multiplyScalar(he.y),y.copy(A[0]).add(g).add(b),Oe(y.x,y.y,y.z)):Oe(he.x,he.y,0)}for(let ee=1;ee<=u;ee++)for(let he=0;he<V;he++){const oe=f?G(P[he],be[he],_e):P[he];M?(g.copy(w.normals[ee]).multiplyScalar(oe.x),b.copy(w.binormals[ee]).multiplyScalar(oe.y),y.copy(A[ee]).add(g).add(b),Oe(y.x,y.y,y.z)):Oe(oe.x,oe.y,p/u*ee)}for(let ee=m-1;ee>=0;ee--){const he=ee/m,oe=h*Math.cos(he*Math.PI/2),ve=_*Math.sin(he*Math.PI/2)+S;for(let xe=0,He=H.length;xe<He;xe++){const Le=G(H[xe],W[xe],ve);Oe(Le.x,Le.y,p+oe)}for(let xe=0,He=D.length;xe<He;xe++){const Le=D[xe];te=K[xe];for(let Ke=0,je=Le.length;Ke<je;Ke++){const it=G(Le[Ke],te[Ke],ve);M?Oe(it.x,it.y+A[u-1].y,A[u-1].x+oe):Oe(it.x,it.y,p+oe)}}}Ae(),Ue();function Ae(){const ee=r.length/3;if(f){let he=0,oe=V*he;for(let ve=0;ve<J;ve++){const xe=Fe[ve];ht(xe[2]+oe,xe[1]+oe,xe[0]+oe)}he=u+m*2,oe=V*he;for(let ve=0;ve<J;ve++){const xe=Fe[ve];ht(xe[0]+oe,xe[1]+oe,xe[2]+oe)}}else{for(let he=0;he<J;he++){const oe=Fe[he];ht(oe[2],oe[1],oe[0])}for(let he=0;he<J;he++){const oe=Fe[he];ht(oe[0]+V*u,oe[1]+V*u,oe[2]+V*u)}}n.addGroup(ee,r.length/3-ee,0)}function Ue(){const ee=r.length/3;let he=0;Se(H,he),he+=H.length;for(let oe=0,ve=D.length;oe<ve;oe++){const xe=D[oe];Se(xe,he),he+=xe.length}n.addGroup(ee,r.length/3-ee,1)}function Se(ee,he){let oe=ee.length;for(;--oe>=0;){const ve=oe;let xe=oe-1;xe<0&&(xe=ee.length-1);for(let He=0,Le=u+m*2;He<Le;He++){const Ke=V*He,je=V*(He+1),it=he+ve+Ke,N=he+xe+Ke,xt=he+xe+je,Je=he+ve+je;ze(it,N,xt,Je)}}}function Oe(ee,he,oe){l.push(ee),l.push(he),l.push(oe)}function ht(ee,he,oe){Xe(ee),Xe(he),Xe(oe);const ve=r.length/3,xe=E.generateTopUV(n,r,ve-3,ve-2,ve-1);ke(xe[0]),ke(xe[1]),ke(xe[2])}function ze(ee,he,oe,ve){Xe(ee),Xe(he),Xe(ve),Xe(he),Xe(oe),Xe(ve);const xe=r.length/3,He=E.generateSideWallUV(n,r,xe-6,xe-3,xe-2,xe-1);ke(He[0]),ke(He[1]),ke(He[3]),ke(He[1]),ke(He[2]),ke(He[3])}function Xe(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function ke(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rh(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Pa[r.type]().fromJSON(r)),new Qa(n,e.options)}}const wh={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ge(s,a),new ge(o,l),new ge(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],p=e[n*3+2],f=e[r*3],h=e[r*3+1],_=e[r*3+2],S=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-p),new ge(f,1-_),new ge(S,1-d)]:[new ge(o,1-l),new ge(u,1-p),new ge(h,1-_),new ge(m,1-d)]}};function Rh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cr extends wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,p=e/o,f=t/l,h=[],_=[],S=[],m=[];for(let d=0;d<u;d++){const E=d*f-a;for(let A=0;A<c;A++){const M=A*p-s;_.push(M,-E,0),S.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const A=E+c*d,M=E+c*(d+1),w=E+1+c*(d+1),b=E+1+c*d;h.push(A,M,b),h.push(M,w,b)}this.setIndex(h),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ss extends wt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let p=e;const f=(t-e)/r,h=new I,_=new ge;for(let S=0;S<=r;S++){for(let m=0;m<=n;m++){const d=s+m/n*a;h.x=p*Math.cos(d),h.y=p*Math.sin(d),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}p+=f}for(let S=0;S<r;S++){const m=S*(n+1);for(let d=0;d<n;d++){const E=d+m,A=E,M=E+n+1,w=E+n+2,b=E+1;o.push(A,M,b),o.push(M,w,b)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ja extends wt{constructor(e=new rs([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(s,3)),this.setAttribute("uv",new pt(a,2));function c(u){const p=r.length/3,f=u.extractPoints(t);let h=f.shape;const _=f.holes;Rn.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,d=_.length;m<d;m++){const E=_[m];Rn.isClockWise(E)===!0&&(_[m]=E.reverse())}const S=Rn.triangulateShape(h,_);for(let m=0,d=_.length;m<d;m++){const E=_[m];h=h.concat(E)}for(let m=0,d=h.length;m<d;m++){const E=h[m];r.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let m=0,d=S.length;m<d;m++){const E=S[m],A=E[0]+p,M=E[1]+p,w=E[2]+p;n.push(A,M,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ch(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new ja(n,e.curveSegments)}}function Ch(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class $i extends wt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],p=new I,f=new I,h=[],_=[],S=[],m=[];for(let d=0;d<=n;d++){const E=[],A=d/n,M=a+A*o,w=e*Math.cos(M),b=Math.sqrt(e*e-w*w);let g=0;d===0&&a===0?g=.5/t:d===n&&l===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){const U=y/t,P=r+U*s;p.x=-b*Math.cos(P),p.y=w,p.z=b*Math.sin(P),_.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),m.push(U+g,1-A),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){const A=u[d][E+1],M=u[d][E],w=u[d+1][E],b=u[d+1][E+1];(d!==0||a>0)&&h.push(A,M,b),(d!==n-1||l<Math.PI)&&h.push(M,w,b)}this.setIndex(h),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(qo(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(qo(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=Pi(i[t]);for(const r in n)e[r]=n[r]}return e}function qo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ph(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Lh={clone:Pi,merge:kt};var Dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(r.value);break;case"v3":this.uniforms[n].value=new I().fromArray(r.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ih extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yo extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uh extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fh extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class eo extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Oh extends eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gs=new gt,Zo=new I,Jo=new I;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zo),Jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Gs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gs,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Br=new I,zr=new Li,hn=new I;class fc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Br,zr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Br,zr,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new I,Ko=new ge,$o=new ge;class en extends fc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,$o),t.subVectors($o,Ko)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bh extends hc{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class zh extends eo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dc extends fc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gh extends hc{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qo extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Si=-90,Mi=1;class Na extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Si,Mi,e,t);r.layers=this.layers,this.add(r);const s=new en(Si,Mi,e,t);s.layers=this.layers,this.add(s);const a=new en(Si,Mi,e,t);a.layers=this.layers,this.add(a);const o=new en(Si,Mi,e,t);o.layers=this.layers,this.add(o);const l=new en(Si,Mi,e,t);l.layers=this.layers,this.add(l);const c=new en(Si,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Hh extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const jo=new gt;class Vh{constructor(e,t,n=0,r=1/0){this.ray=new ls(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jo),this}intersectObject(e,t=!0,n=[]){return Ia(e,this,n,t),n.sort(el),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ia(e[r],this,n,t);return n.sort(el),n}}function el(i,e){return i.distance-e.distance}function Ia(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ia(s[a],e,t,!0)}}function tl(i,e,t,n){const r=kh(n);switch(t){case Bl:return i*e;case Gl:return i*e/r.components*r.byteLength;case Ha:return i*e/r.components*r.byteLength;case ti:return i*e*2/r.components*r.byteLength;case Va:return i*e*2/r.components*r.byteLength;case zl:return i*e*3/r.components*r.byteLength;case mn:return i*e*4/r.components*r.byteLength;case ka:return i*e*4/r.components*r.byteLength;case kr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case js:case ta:return Math.max(i,16)*Math.max(e,8)/4;case Qs:case ea:return Math.max(i,8)*Math.max(e,8)/2;case na:case ia:case sa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:case $r:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ya:case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ba:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qr:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kh(i){switch(i){case Kt:case Il:return{byteLength:1,components:1};case er:case Ul:case xn:return{byteLength:2,components:1};case za:case Ga:return{byteLength:2,components:4};case _n:case Ba:case pn:return{byteLength:4,components:1};case Fl:case Ol:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);function pc(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wh(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,p=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){const u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<p.length;h++){const _=p[f],S=p[h];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let h=0,_=p.length;h<_;h++){const S=p[h];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
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
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
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
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
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
#endif`,kf=`uniform sampler2D dfgLUT;
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,td=`#if defined( USE_POINTS_UV )
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
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sd=`#if defined( USE_MORPHCOLORS )
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
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pd=`float getShadowMask() {
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
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform float backgroundBlurriness;
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
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
}`,Qd=`#if DEPTH_PACKING == 3200
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
}`,jd=`#define DISTANCE
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
}`,ep=`#define DISTANCE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
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
}`,rp=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,up=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,fp=`#define NORMAL
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
}`,dp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,_p=`#define TOON
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
}`,xp=`#define TOON
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
}`,vp=`uniform float size;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,yp=`uniform vec3 color;
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
}`,Ep=`uniform float rotation;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:Zh,alphatest_fragment:Jh,alphatest_pars_fragment:Kh,aomap_fragment:$h,aomap_pars_fragment:Qh,batching_pars_vertex:jh,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:sf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:hf,color_pars_fragment:ff,color_pars_vertex:df,color_vertex:pf,common:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:xf,emissivemap_fragment:vf,emissivemap_pars_fragment:Sf,colorspace_fragment:Mf,colorspace_pars_fragment:yf,envmap_fragment:Ef,envmap_common_pars_fragment:Tf,envmap_pars_fragment:bf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Of,envmap_vertex:wf,fog_vertex:Rf,fog_pars_vertex:Cf,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Nf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Uf,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Vf,lights_physical_pars_fragment:kf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,lightprobes_pars_fragment:Yf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:$f,map_fragment:Qf,map_pars_fragment:jf,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:rd,morphcolor_vertex:sd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:ud,normal_pars_fragment:hd,normal_pars_vertex:fd,normal_vertex:dd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:xd,opaque_fragment:vd,packing:Sd,premultiplied_alpha_fragment:Md,project_vertex:yd,dithering_fragment:Ed,dithering_pars_fragment:Td,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:Rd,shadowmap_vertex:Cd,shadowmask_pars_fragment:Pd,skinbase_vertex:Ld,skinning_pars_vertex:Dd,skinning_vertex:Nd,skinnormal_vertex:Id,specularmap_fragment:Ud,specularmap_pars_fragment:Fd,tonemapping_fragment:Od,tonemapping_pars_fragment:Bd,transmission_fragment:zd,transmission_pars_fragment:Gd,uv_pars_fragment:Hd,uv_pars_vertex:Vd,uv_vertex:kd,worldpos_vertex:Wd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:Zd,cube_vert:Jd,cube_frag:Kd,depth_vert:$d,depth_frag:Qd,distance_vert:jd,distance_frag:ep,equirect_vert:tp,equirect_frag:np,linedashed_vert:ip,linedashed_frag:rp,meshbasic_vert:sp,meshbasic_frag:ap,meshlambert_vert:op,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:up,meshnormal_vert:hp,meshnormal_frag:fp,meshphong_vert:dp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:_p,meshtoon_frag:xp,points_vert:vp,points_frag:Sp,shadow_vert:Mp,shadow_frag:yp,sprite_vert:Ep,sprite_frag:Tp},Ee={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},dn={basic:{uniforms:kt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:kt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:kt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:kt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:kt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:kt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:kt([Ee.points,Ee.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:kt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:kt([Ee.common,Ee.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:kt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:kt([Ee.sprite,Ee.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:kt([Ee.common,Ee.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:kt([Ee.lights,Ee.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};dn.physical={uniforms:kt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Gr={r:0,b:0,g:0},bp=new gt,mc=new We;mc.set(-1,0,0,0,1,0,0,0,1);function Ap(i,e,t,n,r,s){const a=new Qe(0);let o=r===!0?0:1,l,c,u=null,p=0,f=null;function h(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const M=E.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(E){let A=!1;const M=h(E);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(E,A){const M=h(A);M&&M.isCubeTexture?(c===void 0&&(c=new Gt(new kn(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Pi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mc),c.material.toneMapped=rt.getTransfer(M.colorSpace)!==dt,(u!==M||p!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,p=M.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Gt(new cr(2,2),new ii({name:"BackgroundMaterial",uniforms:Pi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=rt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(Gr,uc(i)),t.buffers.color.setClear(Gr.r,Gr.g,Gr.b,A,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:S,dispose:d}}function wp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(D,z,X,C,H){let G=!1;const V=p(D,C,X,z);s!==V&&(s=V,c(s.object)),G=h(D,C,X,H),G&&_(D,C,X,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(D,z,X,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function p(D,z,X,C){const H=C.wireframe===!0;let G=n[z.id];G===void 0&&(G={},n[z.id]=G);const V=D.isInstancedMesh===!0?D.id:0;let ie=G[V];ie===void 0&&(ie={},G[V]=ie);let W=ie[X.id];W===void 0&&(W={},ie[X.id]=W);let K=W[H];return K===void 0&&(K=f(l()),W[H]=K),K}function f(D){const z=[],X=[],C=[];for(let H=0;H<t;H++)z[H]=0,X[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:C,object:D,attributes:{},index:null}}function h(D,z,X,C){const H=s.attributes,G=z.attributes;let V=0;const ie=X.getAttributes();for(const W in ie)if(ie[W].location>=0){const te=H[W];let be=G[W];if(be===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;V++}return s.attributesNum!==V||s.index!==C}function _(D,z,X,C){const H={},G=z.attributes;let V=0;const ie=X.getAttributes();for(const W in ie)if(ie[W].location>=0){let te=G[W];te===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const be={};be.attribute=te,te&&te.data&&(be.data=te.data),H[W]=be,V++}s.attributes=H,s.attributesNum=V,s.index=C}function S(){const D=s.newAttributes;for(let z=0,X=D.length;z<X;z++)D[z]=0}function m(D){d(D,0)}function d(D,z){const X=s.newAttributes,C=s.enabledAttributes,H=s.attributeDivisors;X[D]=1,C[D]===0&&(i.enableVertexAttribArray(D),C[D]=1),H[D]!==z&&(i.vertexAttribDivisor(D,z),H[D]=z)}function E(){const D=s.newAttributes,z=s.enabledAttributes;for(let X=0,C=z.length;X<C;X++)z[X]!==D[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function A(D,z,X,C,H,G,V){V===!0?i.vertexAttribIPointer(D,z,X,H,G):i.vertexAttribPointer(D,z,X,C,H,G)}function M(D,z,X,C){S();const H=C.attributes,G=X.getAttributes(),V=z.defaultAttributeValues;for(const ie in G){const W=G[ie];if(W.location>=0){let K=H[ie];if(K===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const te=K.normalized,be=K.itemSize,Fe=e.get(K);if(Fe===void 0)continue;const J=Fe.buffer,_e=Fe.type,Ae=Fe.bytesPerElement,Ue=_e===i.INT||_e===i.UNSIGNED_INT||K.gpuType===Ba;if(K.isInterleavedBufferAttribute){const Se=K.data,Oe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,ht=K.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let ze=0;ze<W.locationSize;ze++)d(W.location+ze,Se.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ze=0;ze<W.locationSize;ze++)m(W.location+ze);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ze=0;ze<W.locationSize;ze++)A(W.location+ze,be/W.locationSize,_e,te,Oe*Ae,(ht+be/W.locationSize*ze)*Ae,Ue)}else{if(K.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)d(W.location+Se,K.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Se=0;Se<W.locationSize;Se++)A(W.location+Se,be/W.locationSize,_e,te,be*Ae,be/W.locationSize*Se*Ae,Ue)}}else if(V!==void 0){const te=V[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}E()}function w(){U();for(const D in n){const z=n[D];for(const X in z){const C=z[X];for(const H in C){const G=C[H];for(const V in G)u(G[V].object),delete G[V];delete C[H]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const z=n[D.id];for(const X in z){const C=z[X];for(const H in C){const G=C[H];for(const V in G)u(G[V].object),delete G[V];delete C[H]}}delete n[D.id]}function g(D){for(const z in n){const X=n[z];for(const C in X){const H=X[C];if(H[D.id]===void 0)continue;const G=H[D.id];for(const V in G)u(G[V].object),delete G[V];delete H[D.id]}}}function y(D){for(const z in n){const X=n[z],C=D.isInstancedMesh===!0?D.id:0,H=X[C];if(H!==void 0){for(const G in H){const V=H[G];for(const ie in V)u(V[ie].object),delete V[ie];delete H[G]}delete X[C],Object.keys(X).length===0&&delete n[z]}}}function U(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function Rp(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Cp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==mn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const y=g===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Kt&&g!==pn&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:b}}function Pp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new zn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const h=p.length!==0||f||n!==0||r;return r=f,n=p.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=u(p,f,0)},this.setState=function(p,f,h){const _=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,A=E*4;let M=d.clippingState||null;l.value=M,M=u(_,f,A,h);for(let w=0;w!==A;++w)M[w]=t[w];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,f,h,_){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=h+S*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,M=h;A!==S;++A,M+=4)a.copy(p[A]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class to extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kn(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Ti});s.uniforms.tEquirect.value=t;const a=new Gt(r,s),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Wt),new Na(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const nl=256,Lp=3,Dp=20,gc=256,_c=16,Np=3,Ip=new I,Up=new Qe;class as{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Na(1,10,null),this._boxMesh=new Gt(new kn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Ip}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const p=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(Up));const m=new Na(n,r,u);return m.position.copy(o),m.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=_,e.background=S,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(nl,Xl(e))}_fromTexture(e,t){e.mapping===Ai||e.mapping===ji?this._setSize(e.image.length===0?nl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=il(e,!1,!1),n=Math.log2(e)-Lp;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=il(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ai||e.mapping===ji?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Fp(),this._integrationMaterial=Op());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/_c);for(let a=0;a<=n;a++){const o=as.lodToRoughness(a,n);if(a>n-Np)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(gc*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Bp());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function il(i,e,t){return new to(i,{minFilter:Hn,generateMipmaps:e,type:xn,colorSpace:jr,depthBuffer:t})}function ur(i,e,t){return new ii({name:i,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:Xt,blending:Ti,depthTest:!1,depthWrite:!1})}function Fp(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gc}u

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
	`)}function Op(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_c}},`

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
	`)}function Bp(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Dp}
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
	`)}function rl(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function sl(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zp(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===fs||h===ds)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const S=new to(_.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,_=h===fs||h===ds,S=h===Ai||h===ji;if(_||S){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new as(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const E=f.image;return _&&E&&E.height>0||S&&E&&l(E)?(n===null&&(n=new as(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===fs?f.mapping=Ai:h===ds&&(f.mapping=ji),f}function l(f){let h=0;const _=6;for(let S=0;S<_;S++)f[S]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Gp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Yr("WebGLRenderer: "+n+" extension not supported."),r}}}function Hp(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const S=s.get(_);S&&(e.remove(S),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function u(_){const S=_.attributes;for(const m in S)e.update(S[m],i.ARRAY_BUFFER)}function p(_){const S=_.index,m=_.attributes.position;let d=0;if(m===void 0)return;const E=S!==null?S.array.length:m.array.length/3-1,A=m.count>=65535?$l:Kl,M=new A(Math.ceil(E/3)*6,1),w=M.array;if(S!==null){const g=S.array;d=S.version;for(let y=0,U=0;y<E;y+=3){const P=g[y+0],D=g[y+1],z=g[y+2];w[U++]=P,w[U++]=D,w[U++]=D,w[U++]=z,w[U++]=z,w[U++]=P}}else{d=m.version;for(let g=0,y=0;g<E;g+=3){const U=g+0,P=g+1,D=g+2;w[y++]=U,w[y++]=P,w[y++]=P,w[y++]=D,w[y++]=D,w[y++]=U}}M.version=d;const b=s.get(_);b&&e.remove(b),s.set(_,M)}function f(_){const S=s.get(_);if(S){const m=_.index;m!==null&&S.version<m.version&&p(_)}else p(_);return s.get(_)}function h(){for(const _ in r){const S=r[_].deref();S!==void 0&&l(S)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function Vp(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}function c(p,f,h){h!==0&&(i.drawElementsInstanced(n,f,s,p*a,h),t.update(f,n,h))}function u(p,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,h);let S=0;for(let m=0;m<h;m++)S+=f[m];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wp(i,e,t){const n=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;h===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let M=o.attributes.position.count*A,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*w*4*p),g=new Zl(b,M,w,p);g.type=pn,g.needsUpdate=!0;const y=A*4;for(let P=0;P<p;P++){const D=m[P],z=d[P],X=E[P],C=M*w*4*P;for(let H=0;H<D.count;H++){const G=H*y;h===!0&&(r.fromBufferAttribute(D,H),b[C+G+0]=r.x,b[C+G+1]=r.y,b[C+G+2]=r.z,b[C+G+3]=0),_===!0&&(r.fromBufferAttribute(z,H),b[C+G+4]=r.x,b[C+G+5]=r.y,b[C+G+6]=r.z,b[C+G+7]=0),S===!0&&(r.fromBufferAttribute(X,H),b[C+G+8]=r.x,b[C+G+9]=r.y,b[C+G+10]=r.z,b[C+G+11]=X.itemSize===4?r.w:1)}}f={count:p,texture:g,size:new ge(M,w)},n.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let S=0;S<c.length;S++)h+=c[S];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Xp(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,p=c.geometry,f=e.get(c,p);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const qp={[wl]:"LINEAR_TONE_MAPPING",[Rl]:"REINHARD_TONE_MAPPING",[Cl]:"CINEON_TONE_MAPPING",[Oa]:"ACES_FILMIC_TONE_MAPPING",[Ll]:"AGX_TONE_MAPPING",[Dl]:"NEUTRAL_TONE_MAPPING",[Pl]:"CUSTOM_TONE_MAPPING"};function Yp(i,e,t,n,r,s){const a=new gn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new wt;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));const p=new Ih({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Gt(u,p),h=new dc(-1,1,1,-1,0,1);let _=null,S=null,m=!1,d,E=null,A=[],M=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let g=0;g<A.length;g++){const y=A[g];y.setSize&&y.setSize(w,b)}},this.setEffects=function(w){A=w,M=A.length>0&&A[0].isRenderPass===!0;const b=a.width,g=a.height;A.length>0&&o===null&&(o=new gn(b,g,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(b,g,{type:xn,depthBuffer:!1,stencilBuffer:!1}));const y=r===!0&&A.some(U=>U.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ri(b,g),s===!0&&(c.format=Vn,c.type=wi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let U=0;U<A.length;U++){const P=A[U];P.setSize&&P.setSize(b,g),y&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===Cn&&A.length===0)return!1;if(E=b,b!==null){const g=b.width,y=b.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return M===!1&&w.setRenderTarget(a),d=w.toneMapping,w.toneMapping=Cn,!0},this.hasRenderPass=function(){return M},this.end=function(w,b){w.toneMapping=d,m=!0;let g=a,y=o;for(let U=0;U<A.length;U++){const P=A[U];P.enabled!==!1&&(P.render(w,y,g,b),P.needsSwap!==!1&&(g=y,y=y===o?l:o))}if(_!==w.outputColorSpace||S!==w.toneMapping){_=w.outputColorSpace,S=w.toneMapping,p.defines={},rt.getTransfer(_)===dt&&(p.defines.SRGB_TRANSFER="");const U=qp[S];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(E),w.render(f,h),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}const xc=new Ht,vc=new Ri(1,1),Sc=new ec(1),Mc=new Zl,yc=new Pu,Ec=new jl,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function Di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=al[r];if(s===void 0&&(s=new Float32Array(r),al[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function us(i,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function Qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),Pt(t,n)}}function jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),Pt(t,n)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),Pt(t,n)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function hs(i){return i.version===0&&(i.compareFunction=kl,i.needsUpdate=!0),i}function cm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=hs(vc):s=xc,t.setTexture2D(e||s,r)}function um(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yc,r)}function hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=hs(Sc):s=Ec,t.setTextureCube(e||s,r)}function fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Mc,r)}function dm(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return Kp;case 35666:return $p;case 35674:return Qp;case 35675:return jp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return fm}}function pm(i,e){i.uniform1fv(this.addr,e)}function mm(i,e){const t=Di(e,this.size,2);i.uniform2fv(this.addr,t)}function gm(i,e){const t=Di(e,this.size,3);i.uniform3fv(this.addr,t)}function _m(i,e){const t=Di(e,this.size,4);i.uniform4fv(this.addr,t)}function xm(i,e){const t=Di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vm(i,e){const t=Di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sm(i,e){const t=Di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mm(i,e){i.uniform1iv(this.addr,e)}function ym(i,e){i.uniform2iv(this.addr,e)}function Em(i,e){i.uniform3iv(this.addr,e)}function Tm(i,e){i.uniform4iv(this.addr,e)}function bm(i,e){i.uniform1uiv(this.addr,e)}function Am(i,e){i.uniform2uiv(this.addr,e)}function wm(i,e){i.uniform3uiv(this.addr,e)}function Rm(i,e){i.uniform4uiv(this.addr,e)}function Cm(i,e,t){const n=this.cache,r=e.length,s=us(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=hs(vc):a=xc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Pm(i,e,t){const n=this.cache,r=e.length,s=us(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yc,s[a])}function Lm(i,e,t){const n=this.cache,r=e.length,s=us(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=hs(Sc):a=Ec;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Dm(i,e,t){const n=this.cache,r=e.length,s=us(t,r);Ct(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Mc,s[a])}function Nm(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return xm;case 35675:return vm;case 35676:return Sm;case 5124:case 35670:return Mm;case 35667:case 35671:return ym;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return bm;case 36294:return Am;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Dm}}class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dm(t.type)}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class Fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Hs=/(\w+)(\])?(\[|\.)?/g;function hl(i,e){i.seq.push(e),i.map[e.id]=e}function Om(i,e,t){const n=i.name,r=n.length;for(Hs.lastIndex=0;;){const s=Hs.exec(n),a=Hs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hl(t,c===void 0?new Im(o,i,e):new Um(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Fm(o),hl(t,p)),t=p}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Om(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bm=37297;let zm=0;function Gm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const dl=new We;function Hm(i){rt._getMatrix(dl,rt.workingColorSpace,i);const e=`mat3( ${dl.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case es:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Gm(i.getShaderSource(e),o)}else return s}function Vm(i,e){const t=Hm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const km={[wl]:"Linear",[Rl]:"Reinhard",[Cl]:"Cineon",[Oa]:"ACESFilmic",[Ll]:"AgX",[Dl]:"Neutral",[Pl]:"Custom"};function Wm(i,e){const t=km[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new I;function Xm(){rt.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xi(i){return i!==""}function ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Jm,Km)}function Km(i,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ua(t)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace($m,Qm)}function Qm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xl(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jm={[Vr]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function eg(i){return jm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tg={[ji]:"ENVMAP_MODE_REFRACTION"};function ng(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ig={[Al]:"ENVMAP_BLENDING_MULTIPLY",[Zc]:"ENVMAP_BLENDING_MIX",[Jc]:"ENVMAP_BLENDING_ADD"};function rg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ig[i.combine]||"ENVMAP_BLENDING_NONE"}function sg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=eg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ng(t),p=rg(t),f=qm(t),h=Ym(s),_=r.createProgram();let S,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Xi).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Xi).join(`
`),m.length>0&&(m+=`
`)):(S=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),m=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Vm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=Ua(a),a=ml(a,t),a=gl(a,t),o=Ua(o),o=ml(o,t),o=gl(o,t),a=_l(a),o=_l(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=d+S+a,A=d+m+o,M=fl(r,r.VERTEX_SHADER,E),w=fl(r,r.FRAGMENT_SHADER,A);r.attachShader(_,M),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(M)||"",X=r.getShaderInfoLog(w)||"",C=D.trim(),H=z.trim(),G=X.trim();let V=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,w);else{const W=pl(r,M,"vertex"),K=pl(r,w,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+W+`
`+K)}else C!==""?Ge("WebGLProgram: Program Info Log:",C):(H===""||G==="")&&(ie=!1);ie&&(P.diagnostics={runnable:V,programLog:C,vertexShader:{log:H,prefix:S},fragmentShader:{log:G,prefix:m}})}r.deleteShader(M),r.deleteShader(w),g=new Kr(r,_),y=Zm(r,_)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,Bm)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lg(e),t.set(e,n)),n}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function cg(i){return i===ti||i===$r||i===Qr}function ug(i,e,t,n,r,s){const a=new Ya,o=new og,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,y,U,P,D,z){const X=P.fog,C=D.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=e.get(g.envMap||H,G),ie=f[g.type];let W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Ge("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,te=K!==void 0?K.length:0;let be=0;C.morphAttributes.position!==void 0&&(be=1),C.morphAttributes.normal!==void 0&&(be=2),C.morphAttributes.color!==void 0&&(be=3);let Fe,J,_e,Ae;if(ie){const Me=dn[ie];Fe=Me.vertexShader,J=Me.fragmentShader}else{Fe=g.vertexShader,J=g.fragmentShader;const Me=o.getVertexShaderStage(g),lt=o.getFragmentShaderStage(g);o.update(g,Me,lt),_e=Me.id,Ae=lt.id}const Ue=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,ht=D.isBatchedMesh===!0,ze=!!g.map,Xe=!!g.matcap,ke=!!V,ee=ke&&V.isPMREMTexture===!0,he=!!g.aoMap,oe=!!g.lightMap,ve=!!g.bumpMap&&g.wireframe===!1,xe=!!g.normalMap,He=!!g.displacementMap,Le=!!g.emissiveMap,Ke=!!g.metalnessMap,je=!!g.roughnessMap,it=g.anisotropy>0,N=g.clearcoat>0,xt=g.diffuseRoughness>0,Je=g.dispersion>0,ft=g.retroreflectivity>0,de=g.iridescence>0,vt=g.sheen>0,Be=g.transmission>0,Ve=it&&!!g.anisotropyMap,T=N&&!!g.clearcoatMap,x=N&&!!g.clearcoatNormalMap,B=N&&!!g.clearcoatRoughnessMap,ne=xt&&!!g.diffuseRoughnessMap,j=de&&!!g.iridescenceMap,ce=de&&!!g.iridescenceThicknessMap,pe=vt&&!!g.sheenColorMap,Z=vt&&!!g.sheenRoughnessMap,$=!!g.specularMap,fe=!!g.specularColorMap,R=!!g.specularIntensityMap,q=Be&&!!g.transmissionMap,Y=Be&&!!g.thicknessMap,le=!!g.gradientMap,ae=!!g.alphaMap,ue=g.alphaTest>0,De=!!g.alphaHash,Ze=!!g.extensions;let re=Cn;g.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(re=i.toneMapping);const Ie=ee?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,qe={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:Fe,fragmentShader:J,defines:g.defines,customVertexShaderID:_e,customFragmentShaderID:Ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:ht,batchingColor:ht&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ze,matcap:Xe,envMap:ke,envMapMode:ke&&V.mapping,envMapPMREM:ee,envMapMaxLod:ee?Ie.length-1:null,envMapSize:ee?Ie[0].width:null,aoMap:he,lightMap:oe,bumpMap:ve,normalMap:xe,displacementMap:He,emissiveMap:Le,normalMapObjectSpace:xe&&g.normalMapType===Qc,normalMapTangentSpace:xe&&g.normalMapType===Ra,packedNormalMap:xe&&g.normalMapType===Ra&&cg(g.normalMap.format),metalnessMap:Ke,roughnessMap:je,anisotropy:it,anisotropyMap:Ve,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:xt,diffuseRoughnessMap:ne,dispersion:Je,retroreflection:ft,iridescence:de,iridescenceMap:j,iridescenceThicknessMap:ce,sheen:vt,sheenColorMap:pe,sheenRoughnessMap:Z,specularMap:$,specularColorMap:fe,specularIntensityMap:R,transmission:Be,transmissionMap:q,thicknessMap:Y,gradientMap:le,opaque:g.transparent===!1&&g.blending===qi&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:ue,alphaHash:De,combine:g.combine,mapUv:ze&&h(g.map.channel),aoMapUv:he&&h(g.aoMap.channel),lightMapUv:oe&&h(g.lightMap.channel),bumpMapUv:ve&&h(g.bumpMap.channel),normalMapUv:xe&&h(g.normalMap.channel),displacementMapUv:He&&h(g.displacementMap.channel),emissiveMapUv:Le&&h(g.emissiveMap.channel),metalnessMapUv:Ke&&h(g.metalnessMap.channel),roughnessMapUv:je&&h(g.roughnessMap.channel),anisotropyMapUv:Ve&&h(g.anisotropyMap.channel),clearcoatMapUv:T&&h(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&h(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&h(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&h(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&h(g.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&h(g.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&h(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&h(g.sheenRoughnessMap.channel),specularMapUv:$&&h(g.specularMap.channel),specularColorMapUv:fe&&h(g.specularColorMap.channel),specularIntensityMapUv:R&&h(g.specularIntensityMap.channel),transmissionMapUv:q&&h(g.transmissionMap.channel),thicknessMapUv:Y&&h(g.thicknessMap.channel),alphaMapUv:ae&&h(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xe||it),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(ze||ae),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&xe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Se,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:be,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:z.filter(Me=>Me.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ze&&g.map.isVideoTexture===!0&&rt.getTransfer(g.map.colorSpace)===dt,decodeVideoTextureEmissive:Le&&g.emissiveMap.isVideoTexture===!0&&rt.getTransfer(g.emissiveMap.colorSpace)===dt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===tn,flipSided:g.side===Xt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ze&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&g.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function S(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)y.push(U),y.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(m(y,g),d(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function m(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function d(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function E(g){const y=f[g.type];let U;if(y){const P=dn[y];U=Lh.clone(P.uniforms)}else U=g.uniforms;return U}function A(g,y){let U=u.get(y);return U!==void 0?++U.usedTimes:(U=new sg(i,y,g,r),c.push(U),u.set(y,U)),U}function M(g){if(--g.usedTimes===0){const y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function b(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:E,acquireProgram:A,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:b}}function hg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function fg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,S,m,d){let E=i[e];return E===void 0?(E={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:d},i[e]=E):(E.id=f.id,E.object=f,E.geometry=h,E.material=_,E.materialVariant=a(f),E.groupOrder=S,E.renderOrder=f.renderOrder,E.z=m,E.group=d),e++,E}function l(f,h,_,S,m,d,E){E.reversedDepth===!0&&(m=-m);const A=o(f,h,_,S,m,d);_.transmission>0?n.push(A):_.transparent===!0?r.push(A):t.push(A)}function c(f,h,_,S,m,d){const E=o(f,h,_,S,m,d);_.transmission>0?n.unshift(E):_.transparent===!0?r.unshift(E):t.unshift(E)}function u(f,h){t.length>1&&t.sort(f||fg),n.length>1&&n.sort(h||vl),r.length>1&&r.sort(h||vl)}function p(){for(let f=e,h=i.length;f<h;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:p,sort:u}}function dg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Sl,i.set(n,[a])):r>=s.length?(a=new Sl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Qe};break;case"SpotLight":t={position:new I,direction:new I,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gg=0;function _g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xg(i){const e=new pg,t=mg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new gt,a=new gt;function o(c){let u=0,p=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let h=0,_=0,S=0,m=0,d=0,E=0,A=0,M=0,w=0,b=0,g=0,y=0,U=0,P=0;c.sort(_g);for(let z=0,X=c.length;z<X;z++){const C=c[z],H=C.color,G=C.intensity,V=C.distance;let ie=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ti?ie=C.shadow.map.texture:ie=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=H.r*G,p+=H.g*G,f+=H.b*G;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],G);P++}else if(C.isSunLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[_]=te,n.sunShadowMap[_]=ie;const be=K.getViewportCount();for(let Fe=0;Fe<be;Fe++)n.sunShadowMatrix[S+Fe]=K.getMatrix(Fe),n.sunShadowCascade[S+Fe]=K._cascadeData[Fe];S+=be,_++}n.sun[h]=W,h++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=C.shadow.matrix,w++}n.directional[m]=W,m++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(H).multiplyScalar(G),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[E]=W;const K=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,K.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[E]=K.matrix,C.castShadow){const te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.spotShadow[E]=te,n.spotShadowMap[E]=ie,g++}E++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(H).multiplyScalar(G),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=W,A++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const K=C.shadow,te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,n.pointShadow[d]=te,n.pointShadowMap[d]=ie,n.pointShadowMatrix[d]=C.shadow.matrix,b++}n.point[d]=W,d++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(G),W.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[M]=W,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;const D=n.hash;(D.sunLength!==h||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==E||D.rectAreaLength!==A||D.hemiLength!==M||D.numSunShadows!==_||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==g||D.numSpotMaps!==y||D.numLightProbes!==P)&&(n.sun.length=h,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=d,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-U,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,D.sunLength=h,D.directionalLength=m,D.pointLength=d,D.spotLength=E,D.rectAreaLength=A,D.hemiLength=M,D.numSunShadows=_,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=g,D.numSpotMaps=y,D.numLightProbes=P,n.version=gg++)}function l(c,u){let p=0,f=0,h=0,_=0,S=0,m=0;const d=u.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){const M=c[E];if(M.isSunLight){const w=n.sun[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),p++}else if(M.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),f++}else if(M.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),a.identity(),s.copy(M.matrixWorld),s.premultiply(d),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),h++}else if(M.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function Ml(i){const e=new xg(i),t=[],n=[],r=[];function s(p){u.camera=p,t.length=0,n.length=0,r.length=0}function a(p){p.isLightProbeGrid?r.push(p):t.push(p)}function o(p){n.push(p)}function l(){e.setup(t),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function c(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function vg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ml(i),e.set(r,[o])):s>=a.length?(o=new Ml(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`,yg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Eg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],yl=new gt,Vi=new I,Vs=new I;function Tg(i,e,t){let n=new ir;const r=new ge,s=new ge,a=new yt,o=new Uh,l=new Fh,c={},u=t.maxTextureSize,p={[ei]:Xt,[Xt]:ei,[tn]:tn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Sg,fragmentShader:Mg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new wt;_.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Gt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let d=this.type;this.render=function(b,g,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===El&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);const U=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ti),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=d!==this.type;X&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=b.length;C<H;C++){const G=b[C],V=G.shadow;if(V===void 0){Ge("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ie=V.getFrameExtents();r.multiply(ie),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,V.mapSize.y=s.y));const W=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ki){if(G.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new gn(r.x,r.y,{format:ti,type:xn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new Ri(r.x,r.y,pn),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=Wn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut}else G.isPointLight?(V.map=new to(r.x),V.map.depthTexture=new ec(r.x,_n)):(V.map=new gn(r.x,r.y),V.map.depthTexture=new Ri(r.x,r.y,_n)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=Wn,this.type===Vr?(V.map.depthTexture.compareFunction=W?Vl:Hl,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,y);const te=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:y.layers;for(let be=0;be<K;be++){const Fe=V.getCamera(be);if(G.isPointLight){const J=V.camera,_e=V.matrix,Ae=G.distance||J.far;Ae!==J.far&&(J.far=Ae,J.updateProjectionMatrix()),Vi.setFromMatrixPosition(G.matrixWorld),J.position.copy(Vi),Vs.copy(J.position),Vs.add(yg[be]),J.up.copy(Eg[be]),J.lookAt(Vs),J.updateMatrixWorld(),_e.makeTranslation(-Vi.x,-Vi.y,-Vi.z),yl.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yl,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,be),i.clear();else{be===0&&(i.setRenderTarget(V.map),i.clear());const J=V.getViewport(be);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),z.viewport(a)}n=V.getFrustum(be),M(g,y,Fe,G,te,this.type)}V.isPointLightShadow!==!0&&this.type===ki&&E(V,y),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(U,P,D)};function E(b,g){const y=e.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new gn(r.x,r.y,{format:ti,type:xn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(g,null,y,f,S,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(g,null,y,h,S,null)}function A(b,g,y,U){let P=null;const D=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const z=P.uuid,X=g.uuid;let C=c[z];C===void 0&&(C={},c[z]=C);let H=C[X];H===void 0&&(H=P.clone(),C[X]=H,g.addEventListener("dispose",w)),P=H}if(P.visible=g.visible,P.wireframe=g.wireframe,U===ki?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:p[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const z=i.properties.get(P);z.light=y}return P}function M(b,g,y,U,P,D){if(b.visible===!1)return;if(b.layers.test(P)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===ki)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const C=e.update(b),H=b.material;if(Array.isArray(H)){const G=C.groups;for(let V=0,ie=G.length;V<ie;V++){const W=G[V],K=H[W.materialIndex];if(K&&K.visible){const te=A(b,K,U,D);b.onBeforeShadow(i,b,g,y,C,te,W),i.renderBufferDirect(y,null,C,te,b,W),b.onAfterShadow(i,b,g,y,C,te,W)}}}else if(H.visible){const G=A(b,H,U,D);b.onBeforeShadow(i,b,g,y,C,G,null),i.renderBufferDirect(y,null,C,G,b,null),b.onAfterShadow(i,b,g,y,C,G,null)}}const X=b.children;for(let C=0,H=X.length;C<H;C++)M(X[C],g,y,U,P,D)}function w(b){b.target.removeEventListener("dispose",w);for(const y in c){const U=c[y],P=b.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function bg(i,e){function t(){let R=!1;const q=new yt;let Y=null;const le=new yt(0,0,0,0);return{setMask:function(ae){Y!==ae&&!R&&(i.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){R=ae},setClear:function(ae,ue,De,Ze,re){re===!0&&(ae*=Ze,ue*=Ze,De*=Ze),q.set(ae,ue,De,Ze),le.equals(q)===!1&&(i.clearColor(ae,ue,De,Ze),le.copy(q))},reset:function(){R=!1,Y=null,le.set(-1,0,0,0)}}}function n(){let R=!1,q=!1,Y=null,le=null,ae=null;return{setReversed:function(ue){if(q!==ue){const De=e.get("EXT_clip_control");ue?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),q=ue;const Ze=ae;ae=null,this.setClear(Ze)}},getReversed:function(){return q},setTest:function(ue){ue?Se(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(ue){Y!==ue&&!R&&(i.depthMask(ue),Y=ue)},setFunc:function(ue){if(q&&(ue=cu[ue]),le!==ue){switch(ue){case ks:i.depthFunc(i.NEVER);break;case Ws:i.depthFunc(i.ALWAYS);break;case Xs:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case qs:i.depthFunc(i.EQUAL);break;case Ys:i.depthFunc(i.GEQUAL);break;case Zs:i.depthFunc(i.GREATER);break;case Js:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ue}},setLocked:function(ue){R=ue},setClear:function(ue){ae!==ue&&(ae=ue,q&&(ue=1-ue),i.clearDepth(ue))},reset:function(){R=!1,Y=null,le=null,ae=null,q=!1}}}function r(){let R=!1,q=null,Y=null,le=null,ae=null,ue=null,De=null,Ze=null,re=null;return{setTest:function(Ie){R||(Ie?Se(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(Ie){q!==Ie&&!R&&(i.stencilMask(Ie),q=Ie)},setFunc:function(Ie,qe,Me){(Y!==Ie||le!==qe||ae!==Me)&&(i.stencilFunc(Ie,qe,Me),Y=Ie,le=qe,ae=Me)},setOp:function(Ie,qe,Me){(ue!==Ie||De!==qe||Ze!==Me)&&(i.stencilOp(Ie,qe,Me),ue=Ie,De=qe,Ze=Me)},setLocked:function(Ie){R=Ie},setClear:function(Ie){re!==Ie&&(i.clearStencil(Ie),re=Ie)},reset:function(){R=!1,q=null,Y=null,le=null,ae=null,ue=null,De=null,Ze=null,re=null}}}const s=new t,a=new n,o=new r;let l={};const c=new WeakMap;let u={},p={},f={},h=new WeakMap,_=[],S=null,m=!1,d=null,E=null,A=null,M=null,w=null,b=null,g=null,y=new Qe(0,0,0),U=0,P=!1,D=null,z=null,X=null,C=null,H=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=ie>=2);let K=null,te={};const be=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),J=new yt().fromArray(be),_e=new yt().fromArray(Fe);function Ae(R,q,Y,le){const ae=new Uint8Array(4),ue=i.createTexture();i.bindTexture(R,ue),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Y;De++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(q+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ue}const Ue={};Ue[i.TEXTURE_2D]=Ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=Ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),a.setFunc(Qi),ve(!1),xe(oo),Se(i.CULL_FACE),he(Ti);function Se(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Oe(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function ht(R,q){return f[R]!==q?(i.bindFramebuffer(R,q),f[R]=q,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=q),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=q),!0):!1}function ze(R,q){let Y=_,le=!1;if(R){Y=h.get(q),Y===void 0&&(Y=[],h.set(q,Y));const ae=R.textures;if(Y.length!==ae.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,De=ae.length;ue<De;ue++)Y[ue]=i.COLOR_ATTACHMENT0+ue;Y.length=ae.length,le=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,le=!0);le&&i.drawBuffers(Y)}function Xe(R){return S!==R?(i.useProgram(R),S=R,!0):!1}const ke={[yi]:i.FUNC_ADD,[Lc]:i.FUNC_SUBTRACT,[Dc]:i.FUNC_REVERSE_SUBTRACT};ke[Nc]=i.MIN,ke[Ic]=i.MAX;const ee={[Uc]:i.ZERO,[Fc]:i.ONE,[Oc]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[kc]:i.SRC_ALPHA_SATURATE,[Hc]:i.DST_COLOR,[zc]:i.DST_ALPHA,[Bc]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Vc]:i.ONE_MINUS_DST_COLOR,[Gc]:i.ONE_MINUS_DST_ALPHA,[Wc]:i.CONSTANT_COLOR,[Xc]:i.ONE_MINUS_CONSTANT_COLOR,[qc]:i.CONSTANT_ALPHA,[Yc]:i.ONE_MINUS_CONSTANT_ALPHA};function he(R,q,Y,le,ae,ue,De,Ze,re,Ie){if(R===Ti){m===!0&&(Oe(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),R!==Pc){if(R!==d||Ie!==P){if((E!==yi||w!==yi)&&(i.blendEquation(i.FUNC_ADD),E=yi,w=yi),Ie)switch(R){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.ONE,i.ONE);break;case co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",R);break}else switch(R){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case co:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uo:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",R);break}A=null,M=null,b=null,g=null,y.set(0,0,0),U=0,d=R,P=Ie}return}ae=ae||q,ue=ue||Y,De=De||le,(q!==E||ae!==w)&&(i.blendEquationSeparate(ke[q],ke[ae]),E=q,w=ae),(Y!==A||le!==M||ue!==b||De!==g)&&(i.blendFuncSeparate(ee[Y],ee[le],ee[ue],ee[De]),A=Y,M=le,b=ue,g=De),(Ze.equals(y)===!1||re!==U)&&(i.blendColor(Ze.r,Ze.g,Ze.b,re),y.copy(Ze),U=re),d=R,P=!1}function oe(R,q){R.side===tn?Oe(i.CULL_FACE):Se(i.CULL_FACE);let Y=R.side===Xt;q&&(Y=!Y),ve(Y),R.blending===qi&&R.transparent===!1?he(Ti):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const le=R.stencilWrite;o.setTest(le),le&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Le(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function xe(R){R!==Rc?(Se(i.CULL_FACE),R!==z&&(R===oo?i.cullFace(i.BACK):R===Cc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),z=R}function He(R){R!==X&&(V&&i.lineWidth(R),X=R)}function Le(R,q,Y){R?(Se(i.POLYGON_OFFSET_FILL),(C!==q||H!==Y)&&(C=q,H=Y,a.getReversed()&&(q=-q,Y=-Y),i.polygonOffset(q,Y))):Oe(i.POLYGON_OFFSET_FILL)}function Ke(R){R?Se(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function je(R){R===void 0&&(R=i.TEXTURE0+G-1),K!==R&&(i.activeTexture(R),K=R)}function it(R,q,Y){Y===void 0&&(K===null?Y=i.TEXTURE0+G-1:Y=K);let le=te[Y];le===void 0&&(le={type:void 0,texture:void 0},te[Y]=le),(le.type!==R||le.texture!==q)&&(K!==Y&&(i.activeTexture(Y),K=Y),i.bindTexture(R,q||Ue[R]),le.type=R,le.texture=q)}function N(){const R=te[K];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function Je(){try{i.compressedTexImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function ft(){try{i.texSubImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function de(){try{i.texSubImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function vt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function Ve(){try{i.texStorage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function T(){try{i.texStorage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function ne(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function j(R,q){p[R]!==q&&(i.pixelStorei(R,q),p[R]=q)}function ce(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function pe(R){_e.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function Z(R,q){let Y=c.get(q);Y===void 0&&(Y=new WeakMap,c.set(q,Y));let le=Y.get(R);le===void 0&&(le=i.getUniformBlockIndex(q,R.name),i.uniformBlockBinding(q,le,le),Y.set(R,le))}function $(R,q,Y){const ae=c.get(q).get(R);l[ae]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ae,Y),l[ae]=Y)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},K=null,te={},f={},l={},h=new WeakMap,_=[],S=null,m=!1,d=null,E=null,A=null,M=null,w=null,b=null,g=null,y=new Qe(0,0,0),U=0,P=!1,D=null,z=null,X=null,C=null,H=null,J.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Se,disable:Oe,bindFramebuffer:ht,drawBuffers:ze,useProgram:Xe,setBlending:he,setMaterial:oe,setFlipSided:ve,setCullFace:xe,setLineWidth:He,setPolygonOffset:Le,setScissorTest:Ke,activeTexture:je,bindTexture:it,unbindTexture:N,compressedTexImage2D:xt,compressedTexImage3D:Je,texImage2D:x,texImage3D:B,pixelStorei:j,getParameter:ne,updateUBOMapping:Z,uniformBlockBinding:$,texStorage2D:Ve,texStorage3D:T,texSubImage2D:ft,texSubImage3D:de,compressedTexSubImage2D:vt,compressedTexSubImage3D:Be,scissor:ce,viewport:pe,reset:fe}}function Ag(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap,p=new Set;let f;const h=new WeakMap,_=new Set,S=new FinalizationRegistry(T=>_.delete(T));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,x){return m?new OffscreenCanvas(T,x):ts("canvas")}function E(T,x,B){let ne=1;const j=Ve(T);if((j.width>B||j.height>B)&&(ne=B/Math.max(j.width,j.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ce=Math.floor(ne*j.width),pe=Math.floor(ne*j.height);f===void 0&&(f=d(ce,pe));const Z=x?d(ce,pe):f;return Z.width=ce,Z.height=pe,Z.getContext("2d").drawImage(T,0,0,ce,pe),Ge("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ce+"x"+pe+")."),Z}else return"data"in T&&Ge("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function A(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,B,ne,j,ce=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe;ne&&(pe=e.get("EXT_texture_norm16"),pe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),B===i.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),B===i.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),B===i.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){const $=ce?es:rt.getTransfer(j);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=$===dt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),B===i.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(T,x){let B;return T?x===null||x===_n||x===wi?B=i.DEPTH24_STENCIL8:x===pn?B=i.DEPTH32F_STENCIL8:x===er&&(B=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_n||x===wi?B=i.DEPTH_COMPONENT24:x===pn?B=i.DEPTH_COMPONENT32F:x===er&&(B=i.DEPTH_COMPONENT16),B}function y(T,x){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function U(T){const x=new WeakRef(T);n.get(T).__ref=x,_.add(x),S.register(T,x,x)}function P(T){const x=n.get(T).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function D(T){X(T.target)}function z(T){C(T.target)}function X(T){T.removeEventListener("dispose",D),P(T),G(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&p.delete(T)}function C(T){T.removeEventListener("dispose",z),P(T),ie(T)}function H(){for(const T of _){const x=T.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):X(x))}_.clear(),p.clear()}function G(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,ne=h.get(B);if(ne){const j=ne[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(T),Object.keys(ne).length===0&&h.delete(B)}n.remove(T)}function V(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,ne=h.get(B);delete ne[x.__cacheKey],a.memory.textures--}function ie(T){const x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();const B=T.depthTexture;if(B&&B.renderTarget===T&&X(B),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ce=0;ce<x.__webglFramebuffer[j].length;ce++)i.deleteFramebuffer(x.__webglFramebuffer[j][ce]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const ne=T.textures;for(let j=0,ce=ne.length;j<ce;j++){const pe=n.get(ne[j]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(ne[j])}n.remove(T)}let W=0;function K(){W=0}function te(){return W}function be(T){W=T}function Fe(){const T=W;return T>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),W+=1,T}function J(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function _e(T,x){const B=n.get(T);if(T.isVideoTexture&&vt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const ne=T.image;if(ne===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Ae(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){oe(B,T,x);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Ue(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){oe(B,T,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Se(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){ve(B,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const Oe={[Ks]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[$s]:i.MIRRORED_REPEAT},ht={[Ut]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[ps]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},ze={[eu]:i.NEVER,[kl]:i.ALWAYS,[tu]:i.LESS,[Hl]:i.LEQUAL,[nu]:i.EQUAL,[Vl]:i.GEQUAL,[iu]:i.GREATER,[ru]:i.NOTEQUAL};function Xe(T,x){if(x.type===pn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===ps||x.magFilter===pr||x.magFilter===Hn||x.minFilter===Wt||x.minFilter===ps||x.minFilter===pr||x.minFilter===Hn)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Oe[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Oe[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Oe[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==pr&&x.minFilter!==Hn||x.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ke(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",D),U(x));const ne=x.source;let j=h.get(ne);j===void 0&&(j={},h.set(ne,j));const ce=J(x);if(ce!==T.__cacheKey){j[ce]===void 0&&(j[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[ce].usedTimes++;const pe=j[T.__cacheKey];pe!==void 0&&(j[T.__cacheKey].usedTimes--,pe.usedTimes===0&&V(x)),T.__cacheKey=ce,T.__webglTexture=j[ce].texture}return B}function ee(T,x,B){return Math.floor(Math.floor(T/B)/x)}function he(T,x,B,ne){const ce=T.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,ne,x.data);else{ce.sort((R,q)=>R.start-q.start);let pe=0;for(let R=1;R<ce.length;R++){const q=ce[pe],Y=ce[R],le=q.start+q.count,ae=ee(Y.start,x.width,4),ue=ee(q.start,x.width,4);Y.start<=le+1&&ae===ue&&ee(Y.start+Y.count-1,x.width,4)===ae?q.count=Math.max(q.count,Y.start+Y.count-q.start):(++pe,ce[pe]=Y)}ce.length=pe+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,q=ce.length;R<q;R++){const Y=ce[R],le=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),ue=le%x.width,De=Math.floor(le/x.width),Ze=ae,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,ue,De,Ze,re,B,ne,x.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function oe(T,x,B){let ne=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=i.TEXTURE_3D);const j=ke(T,x),ce=x.source;t.bindTexture(ne,T.__webglTexture,i.TEXTURE0+B);const pe=n.get(ce);if(ce.version!==pe.__version||j===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const re=rt.getPrimaries(rt.workingColorSpace),Ie=x.colorSpace===Gn?null:rt.getPrimaries(x.colorSpace),qe=x.colorSpace===Gn||re===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=E(x.image,!1,r.maxTextureSize);$=Be(x,$);const fe=s.convert(x.format,x.colorSpace),R=s.convert(x.type);let q=b(x.internalFormat,fe,R,x.normalized,x.colorSpace,x.isVideoTexture);Xe(ne,x);let Y;const le=x.mipmaps,ae=x.isVideoTexture!==!0,ue=pe.__version===void 0||j===!0,De=ce.dataReady,Ze=y(x,$);if(x.isDepthTexture)q=g(x.format===Vn,x.type),ue&&(ae?t.texStorage2D(i.TEXTURE_2D,1,q,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,q,$.width,$.height,0,fe,R,null));else if(x.isDataTexture)if(le.length>0){ae&&ue&&t.texStorage2D(i.TEXTURE_2D,Ze,q,le[0].width,le[0].height);for(let re=0,Ie=le.length;re<Ie;re++)Y=le[re],ae?De&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Y.width,Y.height,fe,R,Y.data):t.texImage2D(i.TEXTURE_2D,re,q,Y.width,Y.height,0,fe,R,Y.data);x.generateMipmaps=!1}else ae?(ue&&t.texStorage2D(i.TEXTURE_2D,Ze,q,$.width,$.height),De&&he(x,$,fe,R)):t.texImage2D(i.TEXTURE_2D,0,q,$.width,$.height,0,fe,R,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ae&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,q,le[0].width,le[0].height,$.depth);for(let re=0,Ie=le.length;re<Ie;re++)if(Y=le[re],x.format!==mn)if(fe!==null)if(ae){if(De)if(x.layerUpdates.size>0){const qe=tl(Y.width,Y.height,x.format,x.type);for(const Me of x.layerUpdates){const lt=Y.data.subarray(Me*qe/Y.data.BYTES_PER_ELEMENT,(Me+1)*qe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Me,Y.width,Y.height,1,fe,lt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,$.depth,fe,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,q,Y.width,Y.height,$.depth,0,Y.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,$.depth,fe,R,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,q,Y.width,Y.height,$.depth,0,fe,R,Y.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ae&&ue&&t.texStorage2D(i.TEXTURE_2D,Ze,q,le[0].width,le[0].height);for(let re=0,Ie=le.length;re<Ie;re++)Y=le[re],x.format!==mn?fe!==null?ae?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Y.width,Y.height,fe,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,re,q,Y.width,Y.height,0,Y.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?De&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Y.width,Y.height,fe,R,Y.data):t.texImage2D(i.TEXTURE_2D,re,q,Y.width,Y.height,0,fe,R,Y.data)}else if(x.isDataArrayTexture)if(ae){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,q,$.width,$.height,$.depth),De)if(x.layerUpdates.size>0){const re=tl($.width,$.height,x.format,x.type);for(const Ie of x.layerUpdates){const qe=$.data.subarray(Ie*re/$.data.BYTES_PER_ELEMENT,(Ie+1)*re/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,$.width,$.height,1,fe,R,qe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,fe,R,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,q,$.width,$.height,$.depth,0,fe,R,$.data);else if(x.isData3DTexture)ae?(ue&&t.texStorage3D(i.TEXTURE_3D,Ze,q,$.width,$.height,$.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,fe,R,$.data)):t.texImage3D(i.TEXTURE_3D,0,q,$.width,$.height,$.depth,0,fe,R,$.data);else if(x.isFramebufferTexture){if(ue)if(ae)t.texStorage2D(i.TEXTURE_2D,Ze,q,$.width,$.height);else{let re=$.width,Ie=$.height;for(let qe=0;qe<Ze;qe++)t.texImage2D(i.TEXTURE_2D,qe,q,re,Ie,0,fe,R,null),re>>=1,Ie>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),$.parentNode!==re){re.appendChild($),p.add(x),re.onpaint=Ie=>{const qe=Ie.changedElements;for(const Me of p)qe.includes(Me.image)&&(Me.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{const qe=i.RGBA,Me=i.RGBA,lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qe,Me,lt,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(ae&&ue){const re=Ve(le[0]);t.texStorage2D(i.TEXTURE_2D,Ze,q,re.width,re.height)}for(let re=0,Ie=le.length;re<Ie;re++)Y=le[re],ae?De&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe,R,Y):t.texImage2D(i.TEXTURE_2D,re,q,fe,R,Y);x.generateMipmaps=!1}else if(ae){if(ue){const re=Ve($);t.texStorage2D(i.TEXTURE_2D,Ze,q,re.width,re.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,R,$)}else t.texImage2D(i.TEXTURE_2D,0,q,fe,R,$);A(x)&&x.mipmapsAutoUpdate===!0&&M(ne),pe.__version=ce.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ve(T,x,B){if(x.image.length!==6)return;const ne=ke(T,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const ce=n.get(j);if(j.version!==ce.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const pe=rt.getPrimaries(rt.workingColorSpace),Z=x.colorSpace===Gn?null:rt.getPrimaries(x.colorSpace),$=x.colorSpace===Gn||pe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,q=[];for(let Me=0;Me<6;Me++)!fe&&!R?q[Me]=E(x.image[Me],!0,r.maxCubemapSize):q[Me]=R?x.image[Me].image:x.image[Me],q[Me]=Be(x,q[Me]);const Y=q[0],le=s.convert(x.format,x.colorSpace),ae=s.convert(x.type);let ue=b(x.internalFormat,le,ae,x.normalized,x.colorSpace);const De=x.isVideoTexture!==!0,Ze=ce.__version===void 0||ne===!0,re=j.dataReady;let Ie=y(x,Y);Xe(i.TEXTURE_CUBE_MAP,x);let qe;if(x.isDepthTexture){if(ue=g(x.format===Vn,x.type),Ze)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,Y.width,Y.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ue,Y.width,Y.height,0,le,ae,null)}else if(fe){De&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ue,Y.width,Y.height);for(let Me=0;Me<6;Me++){qe=q[Me].mipmaps;for(let lt=0;lt<qe.length;lt++){const Tt=qe[lt];x.format!==mn?le!==null?De?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,0,0,Tt.width,Tt.height,le,Tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,ue,Tt.width,Tt.height,0,Tt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,0,0,Tt.width,Tt.height,le,ae,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,ue,Tt.width,Tt.height,0,le,ae,Tt.data)}}}else{if(qe=x.mipmaps,De&&Ze){qe.length>0&&Ie++;const Me=Ve(q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ue,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(R){De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,q[Me].width,q[Me].height,le,ae,q[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ue,q[Me].width,q[Me].height,0,le,ae,q[Me].data);for(let lt=0;lt<qe.length;lt++){const nn=qe[lt].image[Me].image;De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,0,0,nn.width,nn.height,le,ae,nn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,ue,nn.width,nn.height,0,le,ae,nn.data)}}else{De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,le,ae,q[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ue,le,ae,q[Me]);for(let lt=0;lt<qe.length;lt++){const Tt=qe[lt];De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,0,0,le,ae,Tt.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,ue,le,ae,Tt.image[Me])}}}A(x)&&x.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ce.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xe(T,x,B,ne,j,ce){const pe=s.convert(B.format,B.colorSpace),Z=s.convert(B.type),$=b(B.internalFormat,pe,Z,B.normalized,B.colorSpace),fe=n.get(x),R=n.get(B);if(R.__renderTarget=x,!fe.__hasExternalTextures){const q=Math.max(1,x.width>>ce),Y=Math.max(1,x.height>>ce);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ce,$,q,Y,x.depth,0,pe,Z,null):t.texImage2D(j,ce,$,q,Y,0,pe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,R.__webglTexture,0,ft(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,R.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const ne=x.depthTexture,j=ne&&ne.isDepthTexture?ne.type:null,ce=g(x.stencilBuffer,j),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(x),ce,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(x),ce,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ce,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,T)}else{const ne=x.textures;for(let j=0;j<ne.length;j++){const ce=ne[j],pe=s.convert(ce.format,ce.colorSpace),Z=s.convert(ce.type),$=b(ce.internalFormat,pe,Z,ce.normalized,ce.colorSpace);de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(x),$,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(T,x,B){const ne=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(x.depthTexture);j.__renderTarget=x;const ce=ne?x.depthTexture.image[0]:x.depthTexture.image;(!j.__webglTexture||ce.width!==x.width||ce.height!==x.height)&&(ce.width=x.width,ce.height=x.height,x.depthTexture.needsUpdate=!0),ne?Se(x.depthTexture,0):_e(x.depthTexture,0);const pe=j.__webglTexture,Z=ft(x),$=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,fe=x.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Wn)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,$,pe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,fe,$,pe,0);else if(x.depthTexture.format===Vn)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,$,pe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,fe,$,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const ne=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",j)};ne.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=ne}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)Le(x.__webglFramebuffer[ne],T,ne);else T.texture.mipmaps.length>0?Le(x.__webglFramebuffer[0],T,0):Le(x.__webglFramebuffer,T,0);else if(B){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=i.createRenderbuffer(),He(x.__webglDepthbuffer[ne],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),He(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(T,x,B){const ne=n.get(T);x!==void 0&&xe(ne.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ke(T)}function it(T){const x=T.texture,B=n.get(T),ne=n.get(x);T.addEventListener("dispose",z),U(T);const j=T.textures,ce=T.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=x.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[Z][$]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pe)for(let Z=0,$=j.length;Z<$;Z++){const fe=n.get(j[Z]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&de(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){const $=j[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const fe=s.convert($.format,$.colorSpace),R=s.convert($.type),q=b($.internalFormat,fe,R,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),Y=ft(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),He(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)xe(B.__webglFramebuffer[Z][$],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else xe(B.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);A(x)?M(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let Z=0,$=j.length;Z<$;Z++){const fe=j[Z],R=n.get(fe);let q=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,R.__webglTexture),Xe(q,fe),xe(B.__webglFramebuffer,T,fe,i.COLOR_ATTACHMENT0+Z,q,0),A(fe)&&M(q)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,ne.__webglTexture),Xe(Z,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)xe(B.__webglFramebuffer[$],T,x,i.COLOR_ATTACHMENT0,Z,$);else xe(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Z,0);A(x)?M(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&Ke(T)}function N(T){const x=T.textures;for(let B=0,ne=x.length;B<ne;B++){const j=x[B];if(A(j)&&j.mipmapsAutoUpdate===!0){const ce=w(T),pe=n.get(j).__webglTexture;t.bindTexture(ce,pe),M(ce),t.unbindTexture()}}}const xt=[];function Je(T){if(T.samples>0){if(de(T)===!1){const x=T.textures,B=T.width,ne=T.height;let j=i.COLOR_BUFFER_BIT;const ce=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(T),Z=x.length>1;if(Z)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const R=n.get(x[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,ne,0,0,B,ne,j,i.NEAREST),l===!0&&(xt.length=0,xt.push(i.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&xt.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const R=n.get(x[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ft(T){return Math.min(r.maxSamples,T.samples)}function de(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Be(T,x){const B=T.colorSpace,ne=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==jr&&B!==Gn&&(rt.getTransfer(B)===dt?(ne!==mn||j!==Kt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",B)),x}function Ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=K,this.getTextureUnits=te,this.setTextureUnits=be,this.setTexture2D=_e,this.setTexture2DArray=Ae,this.setTexture3D=Ue,this.setTextureCube=Se,this.rebindTextures=je,this.setupRenderTarget=it,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=de,this.dispose=H}function wg(i,e){function t(n,r=Gn){let s;const a=rt.getTransfer(r);if(n===Kt)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Ul)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===zl)return i.RGB;if(n===mn)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===kr||n===Wr||n===Xr||n===qr)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===kr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===kr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qs||n===js||n===ea||n===ta)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===ra||n===sa||n===aa||n===$r||n===oa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===na||n===ia)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===sa)return s.COMPRESSED_R11_EAC;if(n===aa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return s.COMPRESSED_RG11_EAC;if(n===oa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===la||n===ca||n===ua||n===ha||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===Sa||n===Ma)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===la)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ma)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ga)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Ea||n===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ya)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===Aa||n===Qr||n===wa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends ri{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,f=null,h=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Pg,d={},E=t.getContextAttributes();let A=null,M=null;const w=[],b=[],g=new ge;let y=null,U=null;const P=new en;P.viewport=new yt;const D=new en;D.viewport=new yt;const z=[P,D],X=new Hh;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=w[J];return _e===void 0&&(_e=new Ms,w[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=w[J];return _e===void 0&&(_e=new Ms,w[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=w[J];return _e===void 0&&(_e=new Ms,w[J]=_e),_e.getHandSpace()};function G(J){const _e=b.indexOf(J.inputSource);if(_e===-1)return;const Ae=w[_e];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,c||a),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",ie);for(let J=0;J<w.length;J++){const _e=b[J];_e!==null&&(b[J]=null,w[J].disconnect(_e))}C=null,H=null,m.reset();for(const J in d)delete d[J];if(e.setRenderTarget(A),h=null,f=null,p=null,r=null,M=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),U!==null){const J=U.camera;J.fov=U.fov,J.zoom=U.zoom,J.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",V),r.addEventListener("inputsourceschange",ie),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ue=null,Se=null;E.depth&&(Se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=E.stencil?Vn:Wn,Ue=E.stencil?wi:_n);const Oe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new gn(f.textureWidth,f.textureHeight,{format:mn,type:Kt,depthTexture:new Ri(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ae={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new gn(h.framebufferWidth,h.framebufferHeight,{format:mn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let _e=0;_e<J.removed.length;_e++){const Ae=J.removed[_e],Ue=b.indexOf(Ae);Ue>=0&&(b[Ue]=null,w[Ue].disconnect(Ae))}for(let _e=0;_e<J.added.length;_e++){const Ae=J.added[_e];let Ue=b.indexOf(Ae);if(Ue===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=b.length){b.push(Ae),Ue=Oe;break}else if(b[Oe]===null){b[Oe]=Ae,Ue=Oe;break}if(Ue===-1)break}const Se=w[Ue];Se&&Se.connect(Ae)}}function W(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let _e=J.near,Ae=J.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),X.near=D.near=P.near=_e,X.far=D.far=P.far=Ae,(C!==X.near||H!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),C=X.near,H=X.far),X.layers.mask=J.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;const Ue=J.parent,Se=X.cameras;W(X,Ue);for(let Oe=0;Oe<Se.length;Oe++)W(Se[Oe],Ue);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&J.isPerspectiveCamera&&(U={camera:J,fov:J.fov,zoom:J.zoom}),K(J,X,Ue)};function K(J,_e,Ae){Ae===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=nr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(J){return d[J]};let te=null;function be(J,_e){if(u=_e.getViewerPose(c||a),_=_e,u!==null){const Ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Ue=!1;Ae.length!==X.cameras.length&&(X.cameras.length=0,Ue=!0);for(let ze=0;ze<Ae.length;ze++){const Xe=Ae[ze];let ke=null;if(h!==null)ke=h.getViewport(Xe);else{const he=p.getViewSubImage(f,Xe);ke=he.viewport,ze===0&&(e.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(M))}let ee=z[ze];ee===void 0&&(ee=new en,ee.layers.enable(ze),ee.viewport=new yt,z[ze]=ee),ee.matrix.fromArray(Xe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Xe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ke.x,ke.y,ke.width,ke.height),ze===0&&(X.matrix.copy(ee.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ue===!0&&X.cameras.push(ee)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const ze=p.getDepthInformation(Ae[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let ze=0;ze<Ae.length;ze++){const Xe=Ae[ze].camera;if(Xe){let ke=d[Xe];ke||(ke=new tc,d[Xe]=ke);const ee=p.getCameraImage(Xe);ke.sourceTexture=ee}}}}for(let Ae=0;Ae<w.length;Ae++){const Ue=b[Ae],Se=w[Ae];Ue!==null&&Se!==void 0&&Se.update(Ue,_e,c||a)}te&&te(J,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),_=null}const Fe=new pc;Fe.setAnimationLoop(be),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}}const Dg=new gt,Tc=new We;Tc.set(-1,0,0,0,1,0,0,0,1);function Ng(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,uc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,A,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),A=E.envMap,M=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tc),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,E){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ig(i,e,t,n){let r={},s={};function a(E,A){const M=A.program;n.uniformBlockBinding(E,M,r[E.id])}function o(E,A){let M=r[E.id];M===void 0&&(_(E),M=l(E),r[E.id]=M,E.addEventListener("dispose",m));const w=A.program;n.updateUBOMapping(E,w);const b=e.render.frame;s[E.id]!==b&&(c(E),s[E.id]=b)}function l(E){const A=i.createBuffer(),M=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(E){const A=r[E.id],M=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,g=M.length;b<g;b++){const y=M[b];if(Array.isArray(y))for(let U=0,P=y.length;U<P;U++)u(y[U],b,U,w);else u(y,b,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,A,M,w){if(f(E,A,M,w)===!0){const b=E.__offset,g=E.value;if(Array.isArray(g)){let y=0;for(let U=0;U<g.length;U++){const P=g[U],D=S(P,!0);p(P,E.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,E.__data)}}function p(E,A,M){typeof E=="number"||typeof E=="boolean"?A[M]=E:E.isMatrix3?(A[M]=E.elements[0],A[M+1]=E.elements[1],A[M+2]=E.elements[2],A[M+3]=0,A[M+4]=E.elements[3],A[M+5]=E.elements[4],A[M+6]=E.elements[5],A[M+7]=0,A[M+8]=E.elements[6],A[M+9]=E.elements[7],A[M+10]=E.elements[8],A[M+11]=0):ArrayBuffer.isView(E)?A.set(E.subarray(0,A.length-M),M):E.toArray(A,M)}function f(E,A,M,w){const b=E.value,g=A+"_"+M;if(Array.isArray(b)){w[g]===void 0&&(w[g]=[]);const y=w[g];let U=!1;for(let P=0;P<b.length;P++)h(b[P],y,P)===!0&&(U=!0);return U}return h(b,w,g)}function h(E,A,M){if(A[M]===void 0)return typeof E=="number"||typeof E=="boolean"?A[M]=E:ArrayBuffer.isView(E)?A[M]=E.slice():A[M]=E.clone(),!0;{const w=A[M];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return A[M]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(w.equals(E)===!1)return w.copy(E),!0}}return!1}function _(E){const A=E.uniforms;let M=0;const w=16;for(let g=0,y=A.length;g<y;g++){const U=Array.isArray(A[g])?A[g]:[A[g]];for(let P=0,D=U.length;P<D;P++){const z=U[P],X=Array.isArray(z.value)?z.value:[z.value],C=Array.isArray(A[g])||Array.isArray(z.value);let H=M;for(let V=0,ie=X.length;V<ie;V++){const W=X[V],K=S(W,C),te=M%w,be=te%K.boundary,Fe=te+be;M+=be,Fe!==0&&w-Fe<K.storage&&(M+=w-Fe),V===0&&(H=M),M+=K.storage}const G=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new G((M-H)/Float32Array.BYTES_PER_ELEMENT),z.__offset=H}}const b=M%w;return b>0&&(M+=w-b),E.__size=M,E.__cache={},this}function S(E,A){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=16,M.storage=48):E.isMatrix4?(M.boundary=16,M.storage=64):E.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(M.boundary=16,M.storage=E.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",E),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(E){const A=E.target;A.removeEventListener("dispose",m),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);r={},s={}}return{bind:a,update:o,dispose:d}}const Ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function Fg(){return fn===null&&(fn=new qu(Ug,16,16,ti,xn),fn.name="DFG_LUT",fn.minFilter=Wt,fn.magFilter=Wt,fn.wrapS=wn,fn.wrapT=wn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class Og{constructor(e={}){const{canvas:t=ou(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Kt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=h,m=new Set([ka,Va,Ha]),d=new Set([Kt,_n,er,wi,za,Ga]),E=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const g=[],y=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,z=null,X=null,C=null,H=null;this._outputColorSpace=Jt;let G=0,V=0,ie=null,W=-1,K=null;const te=new yt,be=new yt;let Fe=null;const J=new Qe(0);let _e=0,Ae=t.width,Ue=t.height,Se=1,Oe=null,ht=null;const ze=new yt(0,0,Ae,Ue),Xe=new yt(0,0,Ae,Ue);let ke=!1;const ee=new ir,he=new Za;let oe=!1,ve=!1;const xe=new gt,He=new I,Le=new yt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function it(){return ie===null?Se:1}let N=n;function xt(v,L){return t.getContext(v,L)}let Je,ft,de,vt,Be,Ve,T,x,B,ne,j,ce,pe,Z,$,fe,R,q,Y,le,ae,ue,De;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fa}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),N===null){const L="webgl2";if(N=xt(L,v),N===null)throw xt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(v){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ot("WebGLRenderer: "+v.message),v}function Ze(){Je=new Gp(N),Je.init(),ae=new wg(N,Je),ft=new Cp(N,Je,e,ae),de=new bg(N,Je),ft.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),X=N.createFramebuffer(),C=N.createFramebuffer(),H=N.createFramebuffer(),vt=new kp(N),Be=new hg,Ve=new Ag(N,Je,de,Be,ft,ae,vt),T=new zp(P),x=new Wh(N),ue=new wp(N,x),B=new Hp(N,x,vt,ue),ne=new Xp(N,B,x,ue,vt),q=new Wp(N,ft,Ve),$=new Pp(Be),j=new ug(P,T,Je,ft,ue,$),ce=new Ng(P,Be),pe=new dg,Z=new vg(Je),R=new Ap(P,T,de,ne,_,l),fe=new Tg(P,ne,ft),De=new Ig(N,vt,ft,de),Y=new Rp(N,Je,vt),le=new Vp(N,Je,vt),vt.programs=j.programs,P.capabilities=ft,P.extensions=Je,P.properties=Be,P.renderLists=pe,P.shadowMap=fe,P.state=de,P.info=vt}S!==Kt&&(U=new Yp(S,t.width,t.height,o,r,s));const re=new Lg(P,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const v=Je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(v){v!==void 0&&(Se=v,this.setSize(Ae,Ue,!1))},this.getSize=function(v){return v.set(Ae,Ue)},this.setSize=function(v,L,k=!0){if(re.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=v,Ue=L,t.width=Math.floor(v*Se),t.height=Math.floor(L*Se),k===!0&&(t.style.width=v+"px",t.style.height=L+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Ae*Se,Ue*Se).floor()},this.setDrawingBufferSize=function(v,L,k){Ae=v,Ue=L,Se=k,t.width=Math.floor(v*k),t.height=Math.floor(L*k),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(S===Kt){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(ze)},this.setViewport=function(v,L,k,F){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,L,k,F),de.viewport(te.copy(ze).multiplyScalar(it()).round())},this.getScissor=function(v){return v.copy(Xe)},this.setScissor=function(v,L,k,F){v.isVector4?Xe.set(v.x,v.y,v.z,v.w):Xe.set(v,L,k,F),de.scissor(be.copy(Xe).multiplyScalar(it()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(v){de.setScissorTest(ke=v)},this.setOpaqueSort=function(v){Oe=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,k=!0){let F=0;if(v){let O=!1;if(ie!==null){const se=ie.texture.format;O=m.has(se)}if(O){const se=ie.texture.type,ye=d.has(se),me=R.getClearColor(),Te=R.getClearAlpha(),Ne=me.r,Ye=me.g,tt=me.b;ye?(E[0]=Ne,E[1]=Ye,E[2]=tt,E[3]=Te,N.clearBufferuiv(N.COLOR,0,E)):(A[0]=Ne,A[1]=Ye,A[2]=tt,A[3]=Te,N.clearBufferiv(N.COLOR,0,A))}else F|=N.COLOR_BUFFER_BIT}L&&(F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),R.dispose(),pe.dispose(),Z.dispose(),Ve.dispose(),Be.dispose(),T.dispose(),ne.dispose(),B.dispose(),ue.dispose(),De.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",li),re.removeEventListener("sessionend",ci),Sn.stop()};function Ie(v){v.preventDefault(),po("WebGLRenderer: Context Lost."),D=!0}function qe(){po("WebGLRenderer: Context Restored."),D=!1;const v=vt.autoReset,L=fe.enabled,k=fe.autoUpdate,F=fe.needsUpdate,O=fe.type;Ze(),vt.autoReset=v,fe.enabled=L,fe.autoUpdate=k,fe.needsUpdate=F,fe.type=O}function Me(v){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function lt(v){const L=v.target;L.removeEventListener("dispose",lt),Tt(L)}function Tt(v){nn(v),Be.remove(v)}function nn(v){const L=Be.get(v).programs;L!==void 0&&(L.forEach(function(k){j.releaseProgram(k)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,k,F,O,se){L===null&&(L=Ke);const ye=O.isMesh&&O.matrixWorld.determinantAffine()<0,me=Qt(v,L,k,F,O);de.setMaterial(F,ye);let Te=k.index,Ne=1;if(F.wireframe===!0){if(Te=B.getWireframeAttribute(k),Te===void 0)return;Ne=2}const Ye=k.drawRange,tt=k.attributes.position;let Re=Ye.start*Ne,nt=(Ye.start+Ye.count)*Ne;se!==null&&(Re=Math.max(Re,se.start*Ne),nt=Math.min(nt,(se.start+se.count)*Ne)),Te!==null?(Re=Math.max(Re,0),nt=Math.min(nt,Te.count)):tt!=null&&(Re=Math.max(Re,0),nt=Math.min(nt,tt.count));const bt=nt-Re;if(bt<0||bt===1/0)return;ue.setup(O,F,me,k,Te);let _t,mt=Y;if(Te!==null&&(_t=x.get(Te),mt=le,mt.setIndex(_t)),O.isMesh)F.wireframe===!0?(de.setLineWidth(F.wireframeLinewidth*it()),mt.setMode(N.LINES)):mt.setMode(N.TRIANGLES);else if(O.isLine){let Ft=F.linewidth;Ft===void 0&&(Ft=1),de.setLineWidth(Ft*it()),O.isLineSegments?mt.setMode(N.LINES):O.isLineLoop?mt.setMode(N.LINE_LOOP):mt.setMode(N.LINE_STRIP)}else O.isPoints?mt.setMode(N.POINTS):O.isSprite&&mt.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ft=O._multiDrawStarts,Ce=O._multiDrawCounts,Vt=O._multiDrawCount,ut=Te?x.get(Te).bytesPerElement:1,Yn=Be.get(F).currentProgram.getUniforms();for(let Ot=0;Ot<Vt;Ot++)Yn.setValue(N,"_gl_DrawID",Ot),mt.render(Ft[Ot]/ut,Ce[Ot])}else if(O.isInstancedMesh)mt.renderInstances(Re,bt,O.count);else if(k.isInstancedBufferGeometry){const Ft=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ce=Math.min(k.instanceCount,Ft);mt.renderInstances(Re,bt,Ce)}else mt.render(Re,bt)};function Ni(v,L,k,F){z!==null&&v.isNodeMaterial&&z.setObject(F,v),oe===!0&&$.setState(v,k,!1),v.transparent===!0&&v.side===tn&&v.forceSinglePass===!1?(v.side=Xt,v.needsUpdate=!0,we(v,L,F),v.side=ei,v.needsUpdate=!0,we(v,L,F),v.side=tn):we(v,L,F)}this.compile=function(v,L,k=null){k===null&&(k=v),z!==null&&z.renderStart(v,L,k),b=Z.get(k),b.init(L),y.push(b),k.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),v!==k&&v.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),ve=this.localClippingEnabled,oe=$.init(this.clippingPlanes,ve),oe===!0&&$.setGlobalState(this.clippingPlanes,L),z!==null&&fe.render(b.state.shadowsArray,k,L);const F=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let ye=0;ye<se.length;ye++){const me=se[ye];Ni(me,k,L,O),F.add(me)}else Ni(se,k,L,O),F.add(se)}),b=y.pop(),z!==null&&z.renderEnd(),F},this.compileAsync=function(v,L,k=null){const F=this.compile(v,L,k);return new Promise(O=>{function se(){if(F.forEach(function(ye){const Te=Be.get(ye).currentProgram;(Te===void 0||Te.isReady())&&F.delete(ye)}),F.size===0){O(v);return}setTimeout(se,10)}Je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let $t=null;function oi(v){$t&&$t(v)}function li(){Sn.stop()}function ci(){Sn.start()}const Sn=new pc;Sn.setAnimationLoop(oi),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(v){$t=v,re.setAnimationLoop(v),v===null?Sn.stop():Sn.start()},re.addEventListener("sessionstart",li),re.addEventListener("sessionend",ci),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(v,L);const k=re.enabled===!0&&re.isPresenting===!0,F=U!==null&&(ie===null||k)&&U.begin(P,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(L),L=re.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,L,ie),b=Z.get(v,y.length),b.init(L),b.state.textureUnits=Ve.getTextureUnits(),y.push(b),xe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?he.setFromArrayCamera(L):ee.setFromProjectionMatrix(xe,un,L.reversedDepth),ve=this.localClippingEnabled,oe=$.init(this.clippingPlanes,ve),w=pe.get(v,g.length),w.init(),g.push(w),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Ii(ye,L,-1/0,P.sortObjects)}Ii(v,L,0,P.sortObjects),w.finish(),z!==null&&z.updateLights(b.state.lightsArray),P.sortObjects===!0&&w.sort(Oe,ht),je=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,je&&R.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),oe===!0&&$.beginShadows();const O=b.state.shadowsArray;if(fe.render(O,v,L),oe===!0&&$.endShadows(),(F&&U.hasRenderPass())===!1){const ye=w.opaque,me=w.transmissive;if(b.setupLights(),L.isArrayCamera){const Te=L.cameras;if(me.length>0)for(let Ne=0,Ye=Te.length;Ne<Ye;Ne++){const tt=Te[Ne];fr(ye,me,v,tt)}je&&R.render(v);for(let Ne=0,Ye=Te.length;Ne<Ye;Ne++){const tt=Te[Ne];hr(w,v,tt,tt.viewport)}}else me.length>0&&fr(ye,me,v,L),je&&R.render(v),hr(w,v,L)}ie!==null&&V===0&&(Ve.updateMultisampleRenderTarget(ie),Ve.updateRenderTargetMipmap(ie)),F&&U.end(P),v.isScene===!0&&v.onAfterRender(P,v,L),ue.resetDefaultState(),W=-1,K=null,y.pop(),y.length>0?(b=y[y.length-1],Ve.setTextureUnits(b.state.textureUnits),oe===!0&&$.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,z!==null&&z.renderEnd()};function Ii(v,L,k,F){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){const ye=L.isArrayCamera?he:ee;if(!v.frustumCulled||v.intersectsFrustum(ye)){F&&Le.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xe);const me=ne.update(v),Te=v.material;Te.visible&&w.push(v,me,Te,k,Le.z,null,L)}}else if(v.isMesh||v.isLine||v.isPoints){const ye=L.isArrayCamera?he:ee;if(!v.frustumCulled||v.intersectsFrustum(ye)){const me=ne.update(v),Te=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Le.copy(v.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(v.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Ne=me.groups;for(let Ye=0,tt=Ne.length;Ye<tt;Ye++){const Re=Ne[Ye],nt=Te[Re.materialIndex];nt&&nt.visible&&w.push(v,me,nt,k,Le.z,Re,L)}}else Te.visible&&w.push(v,me,Te,k,Le.z,null,L)}}}const se=v.children;for(let ye=0,me=se.length;ye<me;ye++)Ii(se[ye],L,k,F)}function hr(v,L,k,F){const{opaque:O,transmissive:se,transparent:ye}=v;b.setupLightsView(k),oe===!0&&$.setGlobalState(P.clippingPlanes,k),F&&de.viewport(te.copy(F)),O.length>0&&qn(O,L,k),se.length>0&&qn(se,L,k),ye.length>0&&qn(ye,L,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function fr(v,L,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){const Re=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new gn(1,1,{generateMipmaps:!0,type:Re?xn:Kt,minFilter:Hn,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const se=b.state.transmissionRenderTarget[F.id],ye=F.viewport||te;se.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(se),P.getClearColor(J),_e=P.getClearAlpha(),_e<1&&P.setClearColor(16777215,.5),P.clear(),je&&R.render(k);const Ye=P.toneMapping;P.toneMapping=Cn;const tt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),oe===!0&&$.setGlobalState(P.clippingPlanes,F),qn(v,k,F),Ve.updateMultisampleRenderTarget(se),Ve.updateRenderTargetMipmap(se),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let nt=0,bt=L.length;nt<bt;nt++){const _t=L[nt],{object:mt,geometry:Ft,material:Ce,group:Vt}=_t;if(Ce.side===tn&&mt.layers.test(F.layers)){const ut=Ce.side;Ce.side=Xt,Ce.needsUpdate=!0,Ui(mt,k,F,Ft,Ce,Vt),Ce.side=ut,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(Ve.updateMultisampleRenderTarget(se),Ve.updateRenderTargetMipmap(se))}P.setRenderTarget(me,Te,Ne),P.setClearColor(J,_e),tt!==void 0&&(F.viewport=tt),P.toneMapping=Ye}function qn(v,L,k){const F=L.isScene===!0?L.overrideMaterial:null;for(let O=0,se=v.length;O<se;O++){const ye=v[O],{object:me,geometry:Te,group:Ne}=ye;let Ye=ye.material;Ye.allowOverride===!0&&F!==null&&(Ye=F),me.layers.test(k.layers)&&Ui(me,L,k,Te,Ye,Ne)}}function Ui(v,L,k,F,O,se){z!==null&&O.isNodeMaterial&&z.setObject(v,O),v.onBeforeRender(P,L,k,F,O,se),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(P,L,k,F,v,se),O.transparent===!0&&O.side===tn&&O.forceSinglePass===!1?(O.side=Xt,O.needsUpdate=!0,P.renderBufferDirect(k,L,F,O,v,se),O.side=ei,O.needsUpdate=!0,P.renderBufferDirect(k,L,F,O,v,se),O.side=tn):P.renderBufferDirect(k,L,F,O,v,se),v.onAfterRender(P,L,k,F,O,se)}function Q(v){let L=0;for(const k of v)k.texture!==null&&L++;return L}function we(v,L,k){L.isScene!==!0&&(L=Ke);const F=Be.get(v),O=b.state.lights,se=b.state.shadowsArray,ye=O.state.version,me=j.getParameters(v,O.state,se,L,k,b.state.lightProbeGridArray),Te=j.getProgramCacheKey(me);let Ne=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;const Ye=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;F.envMap=T.get(v.envMap||F.environment,Ye),F.envMapRotation=F.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",lt),Ne=new Map,F.programs=Ne,F.programVariants=new Map);let tt=Ne.get(Te);if(tt!==void 0){if(F.currentProgram===tt&&F.lightsStateVersion===ye)return St(v,me),tt}else me.uniforms=j.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,k,me),v.onBeforeCompile(me,P),tt=j.acquireProgram(me,Te),Ne.set(Te,tt),F.uniforms=me.uniforms;const Re=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=$.uniform),St(v,me),F.needsLights=qt(v),F.lightsStateVersion=ye,F.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.sunLights.value=O.state.sun,Re.sunLightShadows.value=O.state.sunShadow,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.sunShadowMatrix.value=O.state.sunShadowMatrix,Re.sunShadowCascade.value=O.state.sunShadowCascade,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),F.numLightProbeGrids=Q(b.state.lightProbeGridArray),F.currentProgram=tt,F.uniformsList=null,tt}function Pe(v,L,k,F,O){const se=Be.get(v),ye=se.currentProgram.id+","+F+","+O;let me=se.programVariants.get(ye);return me===void 0?(me=we(v,L,k),se.programVariants.set(ye,me)):(se.currentProgram=me,se.uniformsList=null,se.outputColorSpace=F,se.toneMapping=O),me}function st(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Kr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function St(v,L){const k=Be.get(v);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Qt(v,L,k,F,O){L.isScene!==!0&&(L=Ke),Ve.resetTextureUnits();const se=L.fog,ye=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,me=ie===null?P.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rt.workingColorSpace,Te=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ne=T.get(F.envMap||ye,Te),Ye=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,tt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Re=!!k.morphAttributes.position,nt=!!k.morphAttributes.normal,bt=!!k.morphAttributes.color;let _t=Cn;F.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(_t=P.toneMapping);const mt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ft=mt!==void 0?mt.length:0,Ce=Be.get(F),Vt=b.state.lights;if(oe===!0&&(ve===!0||v!==K)){const Mt=v===K&&F.id===W;$.setState(F,v,Mt)}let ut=!1,Yn=!1;F.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Vt.state.version||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Ne||F.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==$.numPlanes||Ce.numIntersection!==$.numIntersection)||Ce.vertexAlphas!==Ye||Ce.vertexTangents!==tt||Ce.morphTargets!==Re||Ce.morphNormals!==nt||Ce.morphColors!==bt||Ce.morphTargetsCount!==Ft||Ce.numLightProbeGrids!==Q(b.state.lightProbeGridArray)?ut=!0:(Ce.outputColorSpace!==me||Ce.toneMapping!==_t)&&(Yn=!0):(ut=!0,Ce.__version=F.version);let Ot=Ce.currentProgram;(ut===!0||Yn===!0)&&(Ot=Yn===!0?Pe(F,L,O,me,_t):we(F,L,O),z&&F.isNodeMaterial&&z.onUpdateProgram(F,Ot,Ce));let dr=!1,Dn=!1,Zn=!1;const at=Ot.getUniforms(),It=Ce.uniforms;if(de.useProgram(Ot.program)&&(dr=!0,Dn=!0,Zn=!0),F.id!==W&&(W=F.id,Dn=!0),dr||K!==v){de.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),at.setValue(N,"projectionMatrix",v.projectionMatrix),at.setValue(N,"viewMatrix",v.matrixWorldInverse);const Lt=at.map.cameraPosition;Lt!==void 0&&Lt.setValue(N,He.setFromMatrixPosition(v.matrixWorld)),ft.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&at.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),K!==v&&(K=v,Dn=!0,Zn=!0)}if(Ce.needsLights&&(Vt.state.sunShadowMap.length>0&&at.setValue(N,"sunShadowMap",Vt.state.sunShadowMap,Ve),Vt.state.directionalShadowMap.length>0&&at.setValue(N,"directionalShadowMap",Vt.state.directionalShadowMap,Ve),Vt.state.spotShadowMap.length>0&&at.setValue(N,"spotShadowMap",Vt.state.spotShadowMap,Ve),Vt.state.pointShadowMap.length>0&&at.setValue(N,"pointShadowMap",Vt.state.pointShadowMap,Ve)),O.isSkinnedMesh){at.setOptional(N,O,"bindMatrix"),at.setOptional(N,O,"bindMatrixInverse");const Mt=O.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),at.setValue(N,"boneTexture",Mt.boneTexture,Ve))}O.isBatchedMesh&&(at.setOptional(N,O,"batchingTexture"),at.setValue(N,"batchingTexture",O._matricesTexture,Ve),at.setOptional(N,O,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",O._indirectTexture,Ve),at.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",O._colorsTexture,Ve));const rn=k.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&q.update(O,k,Ot),(Dn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,at.setValue(N,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(It.envMapIntensity.value=L.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Fg()),Dn){if(at.setValue(N,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&Fi(It,Zn),se&&F.fog===!0&&ce.refreshFogUniforms(It,se),ce.refreshMaterialUniforms(It,F,Se,Ue,b.state.transmissionRenderTarget[v.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){const Mt=M;let Lt=0;for(const Mn of b.state.lightProbeGridArray)Mn.texture!==null&&(Mt.textures[Lt]=Mn.texture,Mt.min[Lt]=Mn.boundingBox.min,Mt.max[Lt]=Mn.boundingBox.max,Mt.resolution[Lt]=Mn.resolution,Lt++);for(const Mn in Mt)Mt[Mn].length=Lt;It.probesSH.value=Mt.textures,It.probesMin.value=Mt.min,It.probesMax.value=Mt.max,It.probesResolution.value=Mt.resolution}Kr.upload(N,st(Ce),It,Ve)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Kr.upload(N,st(Ce),It,Ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&at.setValue(N,"center",O.center),at.setValue(N,"modelViewMatrix",O.modelViewMatrix),at.setValue(N,"normalMatrix",O.normalMatrix),at.setValue(N,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){const Mt=F.uniformsGroups;for(let Lt=0,Mn=Mt.length;Lt<Mn;Lt++){const ao=Mt[Lt];De.update(ao,Ot),De.bind(ao,Ot)}}return Ot}function Fi(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function qt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,L,k){const F=Be.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Be.get(v.texture).__webglTexture=L,Be.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const k=Be.get(v);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,k=0){ie=v,G=L,V=k;let F=null,O=!1,se=!1;if(v){const me=Be.get(v);if(me.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),te.copy(v.viewport),be.copy(v.scissor),Fe=v.scissorTest,de.viewport(te),de.scissor(be),de.setScissorTest(Fe),W=-1;return}else if(me.__webglFramebuffer===void 0)Ve.setupRenderTarget(v);else if(me.__hasExternalTextures)Ve.rebindTextures(v,Be.get(v.texture).__webglTexture,Be.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ye=v.depthTexture;if(me.__boundDepthTexture!==Ye){if(Ye!==null&&Be.has(Ye)&&(v.width!==Ye.image.width||v.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(v)}}const Te=v.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(se=!0);const Ne=Be.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[L])?F=Ne[L][k]:F=Ne[L],O=!0):v.samples>0&&Ve.useMultisampledRTT(v)===!1?F=Be.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[k]:F=Ne,te.copy(v.viewport),be.copy(v.scissor),Fe=v.scissorTest}else te.copy(ze).multiplyScalar(Se).floor(),be.copy(Xe).multiplyScalar(Se).floor(),Fe=ke;if(k!==0&&(F=X),de.bindFramebuffer(N.FRAMEBUFFER,F)&&de.drawBuffers(v,F),de.viewport(te),de.scissor(be),de.setScissorTest(Fe),O){const me=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,k)}else if(se){const me=L;for(let Te=0;Te<v.textures.length;Te++){const Ne=Be.get(v.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,k,me)}}else if(v!==null&&k!==0){const me=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,k)}W=-1};function Nt(v){const L=Be.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=ft.textureFormatReadable(v.format),L.__typeReadable=ft.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,k,F,O,se,ye,me=0){if(!(v&&v.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye],Array.isArray(Te)&&(Te=Te[0])),Te){de.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Ne=v.textures[me],Ye=Ne.format,tt=Ne.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Re=Nt(Ne);if(Re.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-F&&k>=0&&k<=v.height-O&&N.readPixels(L,k,F,O,ae.convert(Ye),ae.convert(tt),se)}finally{const Ne=ie!==null?Be.get(ie).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,L,k,F,O,se,ye,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye],Array.isArray(Te)&&(Te=Te[0])),Te)if(L>=0&&L<=v.width-F&&k>=0&&k<=v.height-O){de.bindFramebuffer(N.FRAMEBUFFER,Te);const Ne=v.textures[me],Ye=Ne.format,tt=Ne.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Re=Nt(Ne);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(L,k,F,O,ae.convert(Ye),ae.convert(tt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const bt=ie!==null?Be.get(ie).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,bt);const _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await lu(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(nt),N.deleteSync(_t),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,k=0){const F=Math.pow(2,-k),O=Math.floor(v.image.width*F),se=Math.floor(v.image.height*F),ye=L!==null?L.x:0,me=L!==null?L.y:0;Ve.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,ye,me,O,se),de.unbindTexture()},this.copyTextureToTexture=function(v,L,k=null,F=null,O=0,se=0){let ye,me,Te,Ne,Ye,tt,Re,nt,bt;const _t=v.isCompressedTexture?v.mipmaps[se]:v.image;if(k!==null)ye=k.max.x-k.min.x,me=k.max.y-k.min.y,Te=k.isBox3?k.max.z-k.min.z:1,Ne=k.min.x,Ye=k.min.y,tt=k.isBox3?k.min.z:0;else{const at=Math.pow(2,-O);ye=Math.floor(_t.width*at),me=Math.floor(_t.height*at),v.isDataArrayTexture?Te=_t.depth:v.isData3DTexture?Te=Math.floor(_t.depth*at):Te=1,Ne=0,Ye=0,tt=0}F!==null?(Re=F.x,nt=F.y,bt=F.z):(Re=0,nt=0,bt=0);const mt=ae.convert(L.format),Ft=ae.convert(L.type);let Ce;L.isData3DTexture?(Ve.setTexture3D(L,0),Ce=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ve.setTexture2DArray(L,0),Ce=N.TEXTURE_2D_ARRAY):(Ve.setTexture2D(L,0),Ce=N.TEXTURE_2D),de.activeTexture(N.TEXTURE0),de.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),de.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),de.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Vt=de.getParameter(N.UNPACK_ROW_LENGTH),ut=de.getParameter(N.UNPACK_IMAGE_HEIGHT),Yn=de.getParameter(N.UNPACK_SKIP_PIXELS),Ot=de.getParameter(N.UNPACK_SKIP_ROWS),dr=de.getParameter(N.UNPACK_SKIP_IMAGES);de.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),de.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),de.pixelStorei(N.UNPACK_SKIP_IMAGES,tt);const Dn=v.isDataArrayTexture||v.isData3DTexture,Zn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const at=Be.get(v),It=Be.get(L),rn=Be.get(at.__renderTarget),Mt=Be.get(It.__renderTarget);de.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Lt=0;Lt<Te;Lt++)Dn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(v).__webglTexture,O,tt+Lt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(L).__webglTexture,se,bt+Lt)),N.blitFramebuffer(Ne,Ye,Ne+ye,Ye+me,Re,nt,Re+ye,nt+me,N.DEPTH_BUFFER_BIT,N.NEAREST);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Be.has(v)){const at=Be.get(v),It=Be.get(L);de.bindFramebuffer(N.READ_FRAMEBUFFER,C),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let rn=0;rn<Te;rn++)Dn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,at.__webglTexture,O,tt+rn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,at.__webglTexture,O),Zn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.__webglTexture,se,bt+rn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,It.__webglTexture,se),O!==0?N.blitFramebuffer(Ne,Ye,Ne+ye,Ye+me,Re,nt,Re+ye,nt+me,N.COLOR_BUFFER_BIT,N.NEAREST):Zn?N.copyTexSubImage3D(Ce,se,Re,nt,bt+rn,Ne,Ye,ye,me):N.copyTexSubImage2D(Ce,se,Re,nt,Ne,Ye,ye,me);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Zn?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Ce,se,Re,nt,bt,ye,me,Te,mt,Ft,_t.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,se,Re,nt,bt,ye,me,Te,mt,_t.data):N.texSubImage3D(Ce,se,Re,nt,bt,ye,me,Te,mt,Ft,_t):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,Re,nt,ye,me,mt,Ft,_t.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,Re,nt,_t.width,_t.height,mt,_t.data):N.texSubImage2D(N.TEXTURE_2D,se,Re,nt,ye,me,mt,Ft,_t);de.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Yn),de.pixelStorei(N.UNPACK_SKIP_ROWS,Ot),de.pixelStorei(N.UNPACK_SKIP_IMAGES,dr),se===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Ce),de.unbindTexture()},this.initRenderTarget=function(v){Be.get(v).__webglFramebuffer===void 0&&Ve.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ve.setTextureCube(v,0):v.isData3DTexture?Ve.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ve.setTexture2DArray(v,0):Ve.setTexture2D(v,0),de.unbindTexture()},this.resetState=function(){G=0,V=0,ie=null,de.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function Bg({progress:i}){return ct.jsxs("svg",{viewBox:"0 0 600 230",className:"garden-art",role:"img","aria-label":"Khu vườn có Ết ết và dâu dâu, lớn dần theo ngày về",children:[ct.jsx("circle",{cx:"475",cy:"55",r:"30",fill:"#fae6ac"}),ct.jsx("circle",{cx:"486",cy:"45",r:"28",fill:"#e9e2f0"}),[70,140,240,365,410,530].map((e,t)=>ct.jsx("path",{d:`M${e} ${25+t%3*18}v8m-4-4h8`,stroke:"#a695ba",strokeWidth:"2",strokeLinecap:"round"},e)),ct.jsx("ellipse",{cx:"300",cy:"205",rx:"265",ry:"23",fill:"#b5bda1"}),ct.jsx("path",{d:"M35 205q70-85 170-30 100-90 210-5 90-35 150 35Z",fill:"#cbd2b4"}),Array.from({length:11},(e,t)=>{const n=60+t*48,r=15+i*(20+t%3*12);return ct.jsxs("g",{children:[ct.jsx("path",{d:`M${n} 207v-${r}m0 12q-18-16-19-3m19 7q17-18 19-6`,stroke:"#81946e",strokeWidth:"3",fill:"none"}),t/12<=i&&ct.jsxs("g",{transform:`translate(${n} ${207-r})`,fill:t%2?"#e7b6ba":"#f7dfa0",children:[ct.jsx("ellipse",{rx:"7",ry:"14"}),ct.jsx("ellipse",{rx:"14",ry:"7"}),ct.jsx("circle",{r:"5",fill:"#f7f1d6"})]})]},n)}),ct.jsxs("g",{transform:"translate(205 107) scale(.8)",children:[ct.jsx("ellipse",{cx:"60",cy:"94",rx:"35",ry:"15",fill:"#9bad83"}),ct.jsx("ellipse",{cx:"60",cy:"58",rx:"39",ry:"31",fill:"#a9bc8e"}),ct.jsx("circle",{cx:"36",cy:"35",r:"15",fill:"#a9bc8e"}),ct.jsx("circle",{cx:"84",cy:"35",r:"15",fill:"#a9bc8e"}),ct.jsx("circle",{cx:"37",cy:"36",r:"4",fill:"#46513e"}),ct.jsx("circle",{cx:"83",cy:"36",r:"4",fill:"#46513e"}),ct.jsx("path",{d:"M49 65q11 10 22 0",stroke:"#46513e",strokeWidth:"2",fill:"none"})]}),ct.jsxs("g",{transform:"translate(302 133) scale(.65)",children:[ct.jsx("path",{d:"M22 42C16 0 104 0 98 42c-5 26-26 60-38 60S27 68 22 42Z",fill:"#efc85e"}),ct.jsx("path",{d:"m60 20-25-15 23 4 9-20 5 21 25-3-22 16Z",fill:"#8da57c"}),ct.jsx("circle",{cx:"45",cy:"48",r:"4",fill:"#514853"}),ct.jsx("circle",{cx:"75",cy:"48",r:"4",fill:"#514853"}),ct.jsx("path",{d:"M54 60q6 6 12 0",stroke:"#514853",strokeWidth:"2.5",fill:"none"})]})]})}function Hg({now:i,weather:e,action:t,onInteract:n}){const r=Nn.useRef(null),s=Nn.useRef({now:i,weather:e,onInteract:n}),a=Nn.useRef(()=>{}),[o,l]=Nn.useState(!1),[c,u]=Nn.useState(!1);return Nn.useEffect(()=>{s.current={now:i,weather:e,onInteract:n}},[i,e,n]),Nn.useEffect(()=>{t&&a.current(t.name)},[t]),Nn.useEffect(()=>{const p=r.current;let f;try{f=new Og({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{l(!0);return}f.setPixelRatio(Math.min(devicePixelRatio,1.5)),f.shadowMap.enabled=!0,f.shadowMap.type=El,f.toneMapping=Oa,f.toneMappingExposure=1.25,f.setClearColor(0,0),p.appendChild(f.domElement);const h=new Bu,_=new en(36,1,.1,80);_.position.set(6.3,5.7,11);const S=new I(0,1.7,0);_.lookAt(S);const m=new Oh(16775920,11575482,2);h.add(m);const d=new Qo(16770744,3);d.position.set(-4,9,6),d.castShadow=!0,d.shadow.mapSize.set(512,512),Object.assign(d.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:.5,far:25}),d.shadow.normalBias=.06,h.add(d);const E=new Qo(14141434,1.5);E.position.set(3,4,-4),h.add(E);const A=new Map,M=Q=>(A.has(Q)||A.set(Q,new Yo({color:Q,roughness:.88})),A.get(Q)),w=new $i(1,24,16),b=(Q,we,Pe,st,St=[1,1,1])=>{const Qt=new Gt(we,M(Pe));return Qt.position.set(...st),Qt.scale.set(...St),Qt.castShadow=!0,Qt.receiveShadow=!0,Q.add(Qt),Qt},g=(Q,we,Pe,st)=>b(Q,w,we,Pe,st),y=(Q,we)=>{const Pe=new Ei;return Pe.name=Q,Pe.position.set(...we),h.add(Pe),Pe},U=y("island",[0,-.12,0]);g(U,"#d9c4e2",[0,-.12,0],[4.3,.52,3.25]),g(U,"#e9e3d3",[0,.13,0],[4.28,.27,3.22]),g(U,"#d2d6ba",[-1,.35,.2],[1.4,.04,1]),g(U,"#e5d3e7",[2.1,.35,-.1],[1.1,.04,1.1]);const P=new ln(.3,.34,.09,10);for(let Q=0;Q<5;Q++)b(h,P,"#d3becb",[-.25+Math.sin(Q)*.18,.3,.65+Q*.43],[1,1,.8]);const D=y("house",[0,.25,-.65]);for(let Q=0;Q<9;Q++){const we=Q/9*Math.PI*2;g(D,Q%2?"#edb58c":"#f1bf94",[Math.sin(we)*.88,1.27,Math.cos(we)*.85],[.72,1.28,.73])}g(D,"#eac6a4",[0,.24,0],[1.52,.2,1.4]);const z=b(D,new ln(.16,.26,.65,9),"#92a17b",[0,2.7,0]);z.rotation.z=-.25;const X=g(D,"#aabd8b",[.48,2.56,.1],[.6,.1,.26]);X.rotation.z=.18,g(D,"#987286",[0,.67,1.48],[.47,.67,.12]),b(D,new kn(.82,.58,.16),"#987286",[0,.38,1.49]),g(D,"#bc9aa2",[0,.65,1.59],[.36,.56,.035]),g(D,"#ffe2a5",[.23,.6,1.64],[.055,.055,.04]),b(D,new ln(.6,.68,.14,24),"#c6a2ae",[0,.08,1.6],[1,1,.57]);const C=new Yo({color:"#ffebb4",emissive:"#ffbf62",emissiveIntensity:.55,roughness:.6});for(const Q of[-1,1]){g(D,"#9b7a89",[Q*.88,1.45,1.25],[.36,.39,.12]);const we=new Gt(new Ja(.28,24),C);we.position.set(Q*.88,1.45,1.38),D.add(we),b(D,new kn(.045,.56,.04),"#a07c89",[Q*.88,1.45,1.4]),b(D,new kn(.56,.045,.04),"#a07c89",[Q*.88,1.45,1.4])}const H=new zh(16763269,0,5,2);H.position.set(0,1.5,1.5),D.add(H);const G=y("frog",[-1.55,.36,1.55]);G.rotation.y=.28,g(G,"#9fb98b",[0,.43,0],[.48,.48,.38]),g(G,"#e3e8bb",[0,.4,.3],[.32,.31,.11]),g(G,"#afc79a",[0,.95,0],[.58,.36,.4]);for(const Q of[-1,1]){g(G,"#afc79a",[Q*.32,1.23,.04],[.23,.23,.2]),g(G,"#fff9df",[Q*.32,1.25,.2],[.145,.16,.07]),g(G,"#464f49",[Q*.32+.025,1.25,.262],[.062,.09,.03]),g(G,"#fff9ee",[Q*.32+.04,1.29,.286],[.021,.024,.013]),g(G,"#e1b0a4",[Q*.4,.88,.315],[.115,.055,.025]),g(G,"#92ac80",[Q*.35,.09,.18],[.28,.12,.24]);const we=g(G,"#9fb98b",[Q*.43,.43,.04],[.15,.28,.16]);we.rotation.z=Q*.35}const V=new cs(0,0,.14,.085,Math.PI,Math.PI*2,!1,0),ie=new wt().setFromPoints(V.getPoints(20).map(Q=>new I(Q.x,Q.y+.87,.39)));G.add(new Jr(ie,new Zr({color:"#52614b"})));const W=new Ei;W.position.set(-.16,1.41,-.04),W.rotation.z=.15,G.add(W),b(W,new ln(.49,.49,.07,24),"#857293",[0,0,0]),b(W,new Ka(.34,.7,24),"#9180a0",[0,.35,0]),b(W,new ln(.28,.32,.12,24),"#d9b3a1",[0,.09,0]),g(W,"#f5dca0",[0,.1,.3],[.06,.06,.025]);const K=y("berry",[1.65,.35,1.6]);K.rotation.y=.24;const te=new $i(.6,28,20),be=te.attributes.position;for(let Q=0;Q<be.count;Q++){const we=be.getY(Q),Pe=.66+(we+.6)/1.2*.34;be.setXYZ(Q,be.getX(Q)*Pe,we,be.getZ(Q)*Pe)}te.computeVertexNormals(),b(K,te,"#f2d67c",[0,.63,0],[1,1.08,.82]);for(let Q=0;Q<3;Q++)for(let we=0;we<5;we++){const Pe=-.65+Q*.55,st=-1.1+we*.55,St=.66+(Math.sin(Pe)+1)*.17;g(K,"#fff2bf",[Math.sin(st)*Math.cos(Pe)*.61*St,.63+Math.sin(Pe)*.65,Math.cos(st)*Math.cos(Pe)*.51*St],[.024,.045,.018])}for(let Q=0;Q<5;Q++){const we=Q*Math.PI*2/5,Pe=g(K,"#a6ba88",[Math.sin(we)*.2,1.23,Math.cos(we)*.2],[.14,.06,.34]);Pe.rotation.y=we}for(const Q of[-1,1])g(K,"#72594c",[Q*.17,.72,.435],[.037,.065,.025]),g(K,"#eeb5a0",[Q*.31,.58,.36],[.085,.04,.025]),g(K,"#e6c675",[Q*.21,.06,.05],[.17,.075,.15]);g(K,"#a77d58",[0,.58,.444],[.055,.025,.018]);const Fe=b(h,new ln(.045,.045,1,12),"#ef9cab",[0,0,0]),J=g(h,"#f4a8b6",[0,0,0],[.065,.045,.065]),_e=new I,Ae=new I,Ue=new I,Se=new I(0,1,0);let Oe=-100,ht=!1,ze=-100;const Xe=document.createElement("canvas");Xe.width=256,Xe.height=128;const ke=Xe.getContext("2d");ke.font="bold 80px sans-serif",ke.textAlign="center",ke.textBaseline="middle",ke.lineWidth=10,ke.lineJoin="round",ke.strokeStyle="#fff4db",ke.fillStyle="#586248",ke.strokeText(">:V",128,64),ke.fillText(">:V",128,64);const ee=new Ju(Xe);ee.colorSpace=Jt;const he=new jn({map:ee,transparent:!0,depthTest:!1,depthWrite:!1}),oe=new Gt(new cr(1.4,.7),he);oe.visible=!1,oe.renderOrder=2,h.add(oe);const ve=y("ghost",[2.15,2.95,-.45]);g(ve,"#fff5ee",[0,0,0],[.35,.44,.3]);for(let Q=0;Q<3;Q++)g(ve,"#fff5ee",[(Q-1)*.21,-.32,0],[.14,.15,.24]);for(const Q of[-1,1])g(ve,"#77677f",[Q*.11,.02,.28],[.033,.059,.024]),g(ve,"#e7b9bd",[Q*.21,-.07,.24],[.056,.033,.015]);g(ve,"#77677f",[0,-.12,.29],[.034,.043,.018]);for(const[Q,we,Pe]of[[-2.7,-.8,2.4],[2.6,-1.5,2.8],[-1.8,-2,2.1]])b(h,new ln(.085,.14,Pe,8),"#bba0ae",[Q,Pe/2,we]),g(h,"#c5b1d5",[Q,Pe,we],[.7,.95,.67]),g(h,"#d5bddf",[Q-.3,Pe-.35,we+.08],[.48,.6,.48]),g(h,"#cdb8df",[Q+.3,Pe-.25,we],[.45,.65,.45]);const xe=new $i(.28,16,10,0,Math.PI*2,0,Math.PI/2);for(const[Q,we,Pe]of[[-2.8,1.6,1],[-2.5,1.9,.65],[2.8,.7,.9],[3,.2,.65],[-.8,-2.4,.8]])b(h,new ln(.07,.085,.4,8),"#f3e7d2",[Q,.42,we],[Pe,Pe,Pe]),b(h,xe,"#dba7b4",[Q,.42+Pe*.2,we],[Pe,Pe,Pe]),g(h,"#fff0dd",[Q-.07,.42+Pe*.43,we+.05],[.05*Pe,.023,.05*Pe]);for(let Q=0;Q<11;Q++){const we=Q*2.4,Pe=Math.sin(we)*3.45,st=Math.cos(we)*2.5;g(h,Q%2?"#bac6a2":"#e2c9d8",[Pe,.32,st],[.2,.2,.25])}const He=y("sun",[-3.4,4.5,-2.4]),Le=new jn({color:"#ffe1a1"}),Ke=new Gt(w,Le);Ke.scale.setScalar(.5),He.add(Ke);const je=new Gt(new ss(.6,.64,48),new jn({color:"#ffe4bb",transparent:!0,opacity:.5,side:tn}));je.quaternion.copy(_.quaternion),He.add(je);const it=y("moon",[2,4.8,-3]),N=new rs;N.moveTo(.18,.51),N.bezierCurveTo(-.55,.5,-.67,-.42,.03,-.51),N.bezierCurveTo(.32,-.54,.49,-.32,.51,-.17),N.bezierCurveTo(-.08,-.42,-.31,.16,.18,.51);const xt=new Gt(new Qa(N,{depth:.09,bevelEnabled:!0,bevelSize:.045,bevelThickness:.04,bevelSegments:3,steps:1}),new jn({color:"#ffeac3"}));xt.quaternion.copy(_.quaternion),it.add(xt);const Je=y("clouds",[0,0,0]),ft=M("#fff5f1");for(const[Q,we,Pe,st]of[[-3,3.8,-1,.8],[2.7,4.1,-2,1],[-.2,4.8,-4,.65]])for(let St=0;St<3;St++)g(Je,"#fff5f1",[Q+(St-1)*.38,we+(St===1?.14:0),Pe],[.48*st,.24*st,.3*st]);const de=new Float32Array(300);for(let Q=0;Q<100;Q++)de.set([(Math.random()-.5)*17,2.8+Math.random()*5,-5-Math.random()*3],Q*3);const vt=new wt;vt.setAttribute("position",new Ln(de,3));const Be=new Ql({color:"#fff5d8",size:.055,transparent:!0,opacity:0}),Ve=new Oo(vt,Be);h.add(Ve);const T=new wt().setFromPoints([new I(0,0,0),new I(1,.45,0)]),x=new Zr({color:"#fff1c8",transparent:!0,opacity:0}),B=new Jr(T,x);h.add(B);const ne=new Float32Array(1320);for(let Q=0;Q<220;Q++){const we=Q*6;ne[we]=(Math.random()-.5)*11,ne[we+1]=Math.random()*9,ne[we+2]=(Math.random()-.5)*7}const j=new wt;j.setAttribute("position",new Ln(ne,3));const ce=new Zu(j,new Zr({color:"#c2d5e7",transparent:!0,opacity:.55}));ce.frustumCulled=!1,h.add(ce);const pe=Array.from({length:8},(Q,we)=>{const Pe=new Gt(new ss(.15,.17,20),new jn({color:"#e9edf8",transparent:!0,side:tn}));return Pe.rotation.x=-Math.PI/2,Pe.position.set(Math.sin(we*2.5)*2.7,.38,Math.cos(we*2.5)*2.2),h.add(Pe),Pe}),Z=new rs;Z.moveTo(0,-.2),Z.bezierCurveTo(-.55,.15,-.15,.5,0,.25),Z.bezierCurveTo(.15,.5,.55,.15,0,-.2);const $=new ja(Z),fe=new jn({color:"#e9a7bc",transparent:!0,side:tn}),R=Array.from({length:7},()=>{const Q=new Gt($,fe);return h.add(Q),Q.visible=!1,Q});let q=0,Y=-100,le="frog",ae=!1;const ue=new I,De={frog:G,berry:K,house:D,ghost:ve,sky:He};a.current=Q=>{le=Q,Y=q,De[Q].getWorldPosition(ue),ue.y+=Q==="house"?2.5:.8,Q==="house"&&(ae=!ae),Q==="berry"&&(Oe=q,ht=!1)};const Ze=new Vh,re=new ge,Ie={x:0,y:0},qe=Q=>{Ie.x=Q.clientX,Ie.y=Q.clientY},Me=Q=>{if(Math.hypot(Q.clientX-Ie.x,Q.clientY-Ie.y)>12)return;const we=f.domElement.getBoundingClientRect();re.set((Q.clientX-we.left)/we.width*2-1,-(Q.clientY-we.top)/we.height*2+1),Ze.setFromCamera(re,_);let st=Ze.intersectObjects([G,K,D,ve],!0)[0]?.object??null;for(;st&&!Object.values(De).includes(st);)st=st.parent;s.current.onInteract(st?.name||"sky")};f.domElement.addEventListener("pointerdown",qe),f.domElement.addEventListener("pointerup",Me);const lt=()=>{const{width:Q,height:we}=p.getBoundingClientRect();f.setSize(Q,we),_.aspect=Q/Math.max(we,1),_.position.set(6.3,5.7,11).multiplyScalar(Math.max(1,1.15/_.aspect)),_.lookAt(S),_.updateProjectionMatrix()},Tt=new ResizeObserver(lt);Tt.observe(p),lt();let nn=!0;const Ni=new IntersectionObserver(Q=>{nn=Q[0].isIntersecting});Ni.observe(p);const $t=matchMedia("(prefers-reduced-motion: reduce)");let oi=0,li=0,ci=!1;const Sn=new Qe("#ffe0a1"),Ii=new Qe("#b9b8ef"),hr=new Qe("#fff5f1"),fr=new Qe("#969aaa"),qn=Q=>{if(ci||(oi=requestAnimationFrame(qn),document.hidden||!nn||Q-li<($t.matches?200:33)))return;const we=Math.min((Q-li)/1e3,.1);li=Q,q+=we;const Pe=bc(s.current.now),st=Pe.phase==="night",St=s.current.weather?.raining??!1,Qt=(s.current.weather?.clouds??25)/100,Fi=Pe.daylight;d.intensity=go.lerp(d.intensity,(st?.32:1.1+Fi*2.8)*(St?.35:1-Qt*.45),.04),d.color.copy(Ii).lerp(Sn,st?0:Fi),m.intensity=go.lerp(m.intensity,st?.85:St?1.35:2,.04),m.color.set(st?"#beb9eb":"#fff5ed"),He.visible=!st&&!St&&Qt<.9,He.position.y=4.2+Fi*.8,it.visible=st,xt.material.transparent=!0,xt.material.opacity=St?.3:1,Be.opacity=st?(St?.12:.8)*($t.matches?1:.85+Math.sin(q*1.2)*.15):0,Je.scale.setScalar(.8+Qt*.45),ft.color.lerp(St?fr:hr,.04);const qt=$t.matches?0:1;Je.position.x=Math.sin(q*.12)*.18*qt,ve.position.y=2.95+Math.sin(q*1.7)*.16*qt,ve.rotation.z=Math.sin(q)*.09*qt,G.scale.y=1+Math.sin(q*2)*.014*qt,K.rotation.z=Math.sin(q*1.5)*.025*qt;const Nt=q-Y;G.position.y=.36+(le==="frog"&&Nt<1?Math.sin(Nt*Math.PI)*.7*qt:0),le==="berry"&&Nt<1.5&&(K.rotation.z+=Math.sin(Nt*12)*.22*(1-Nt/1.5)*qt);const v=q-Oe,L=$t.matches?v<.3?1:0:Ac(v);L===1&&!ht&&(ze=q,ht=!0);const k=wc(q-ze);G.position.y+=k.jolt*.18*qt,G.rotation.z=k.jolt*-.16*qt,oe.visible=k.opacity>0,oe.position.set(G.position.x,2.75+k.rise*qt,G.position.z),oe.quaternion.copy(_.quaternion),he.opacity=k.opacity,K.localToWorld(_e.set(0,.58,.47)),K.localToWorld(J.position.set(0,.46,.53)),G.localToWorld(Ae.set(.4,.88,.35)),J.position.lerp(Ae,L),Ue.subVectors(J.position,_e),Fe.position.copy(_e).addScaledVector(Ue,.5),Fe.scale.y=Ue.length(),Fe.quaternion.setFromUnitVectors(Se,Ue.normalize()),le==="ghost"&&Nt<1.5?ve.rotation.y=Math.sin(Nt/1.5*Math.PI)*Math.PI*2*qt:ve.rotation.y=0,C.emissiveIntensity=ae?2:st?.8:.12,H.intensity=ae?4:st?1.5:0;for(const[O,se]of R.entries())se.visible=Nt<2.4&&!$t.matches,se.position.copy(ue).add(new I(Math.sin(O*2.4)*Nt*.45,Nt*.9+O*.07,Math.cos(O*2.4)*Nt*.35)),se.quaternion.copy(_.quaternion),se.scale.setScalar(.3+O%3*.1);fe.opacity=Math.max(0,1-Nt/2.4);const F=le==="sky"&&Nt<1.5?Nt:q%13;if(B.visible=st&&!$t.matches&&F<1.5,B.position.set(3-F*5,6-F*2,-3),x.opacity=Math.sin(F/1.5*Math.PI)*(St?.2:1),ce.visible=St,St){const O=3+Math.min(s.current.weather?.precipitation??0,6);for(let se=0;se<220;se++){const ye=se*6;$t.matches||(ne[ye+1]-=we*O),ne[ye+1]<.4&&(ne[ye+1]=8),ne[ye+3]=ne[ye]+.04,ne[ye+4]=ne[ye+1]+.18,ne[ye+5]=ne[ye+2]}j.attributes.position.needsUpdate=!0}for(const[O,se]of pe.entries()){se.visible=St;const ye=$t.matches?.4:(q*.65+O*.16)%1;se.scale.setScalar(.2+ye*2.5),se.material.opacity=(1-ye)*.45}f.render(h,_)},Ui=Q=>{Q.preventDefault(),ci=!0,cancelAnimationFrame(oi),l(!0)};return f.domElement.addEventListener("webglcontextlost",Ui),oi=requestAnimationFrame(qn),u(!0),()=>{ci=!0,cancelAnimationFrame(oi),Tt.disconnect(),Ni.disconnect(),a.current=()=>{},f.domElement.removeEventListener("pointerdown",qe),f.domElement.removeEventListener("pointerup",Me),f.domElement.removeEventListener("webglcontextlost",Ui);const Q=new Set,we=new Set;h.traverse(Pe=>{if(Pe instanceof Gt||Pe instanceof Jr||Pe instanceof Oo){Q.add(Pe.geometry);for(const st of Array.isArray(Pe.material)?Pe.material:[Pe.material])we.add(st)}}),Q.forEach(Pe=>Pe.dispose()),we.forEach(Pe=>Pe.dispose()),ee.dispose(),f.dispose(),f.forceContextLoss(),f.domElement.remove()}},[]),ct.jsxs("div",{className:"scene-wrap","data-ready":c&&!o,children:[ct.jsx("div",{ref:r,className:"scene-canvas",role:"img","aria-label":"Khu vườn 3D: nhà bí ngô, ếch xanh đội mũ phù thủy, dâu vàng và bạn ma. Dùng các nút bên dưới để tương tác.",hidden:o}),!c&&!o&&ct.jsx("span",{className:"sr-only",role:"status",children:"Đang mở khu vườn…"}),o&&ct.jsxs("div",{className:"scene-fallback",children:[ct.jsx(Bg,{progress:.4}),ct.jsx("span",{className:"sr-only",children:"Thiết bị chưa mở được 3D. Đồng hồ vẫn hoạt động."})]})]})}export{Hg as default};
