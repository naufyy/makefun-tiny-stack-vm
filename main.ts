import*as f from'fs'
let E=process.env,I=E.MAKEFUN_INPUT_DIR||'/input',Q=E.MAKEFUN_OUTPUT_DIR||'/output',i=0,O,l,d,w,V=(p,u)=>{let D=new Int32Array(257),C=[],M=new Int32Array(256),s=0,k=0,c=0,t=0,o,e,a,b,j,q
for(;;){if(++t>1e6)return 10
if((o=p[c])==null)return 9
e=' 0Aq46:;?!!!!!!!!999999959995999!999!!!!!!!!!!!!!PTTP0!!!!!!!!!!!58!!!!!!!!!!!!!!4414'.charCodeAt(o+1)-48
if(!(e>=0))return 5
if((j=c+1+(e>>4))>p.length)return 9
if(s<(a=e>>2&3))return 2
if(s-a+(e&3)>256)return 3
b=D[s-1];a=D[s-2];c=j;q=p[j-2]|p[j-1]<<8
switch(o){case 0:return 0
case 1:D[s++]=p[c-1]<<24>>24;break
case 2:D[s++]=p[c-4]|p[c-3]<<8|q<<16;break
case 3:s--;break
case 4:D[s++]=b;break
case 5:D[s-1]=a;D[s-2]=b;break
case 6:D[s++]=a;break
case 7:D[s-1]=D[s-3];D[s-3]=a;D[s-2]=b;break
case 23:D[s-1]=-b;break
case 27:D[s-1]=~b;break
case 48:c+=q<<16>>16;break
case 49:case 50:s--;if(!b==o<50)c+=q<<16>>16;break
case 51:if(C.length>63)return 7;C.push(c);c=q;break
case 52:if((c=C.pop())==null)return 8;break
case 64:if(b>>>8)return 6;D[s-1]=M[b];break
case 65:if(b>>>8)return 6;M[b]=a;s-=2;break
case 80:j=''+b;if(l+j.length>65536)return 11;s--;for(o of j)O[l++]=o.charCodeAt();break
case 81:if(l>65535)return 11;O[l++]=b;s--;break
case 82:D[s++]=u[k++]??-1;break
case 83:return b&255
default:if(o>18&&o<23&&!b)return 4;D[s-2]=o<17?a+b:o<18?a-b:o<19?Math.imul(a,b):o<20?a/b:o<21?a%b:o<22?(a>>>0)/(b>>>0):o<23?(a>>>0)%(b>>>0):o<25?a&b:o<26?a|b:o<27?a^b:o<29?a<<b:o<30?a>>b:o<31?a>>>b:o<33?a==b:o<34?a<b:a>>>0<b>>>0;s--}}}
for(;i++<40;){d='/i'+(1e3+i+'').slice(1);O=new Uint8Array(65536);l=0
w=V(f.readFileSync(I+d+'/program.bin'),f.readFileSync(I+d+'/input.bin'))
f.mkdirSync(d=Q+d,{recursive:!0});f.writeFileSync(d+'/stdout.bin',O.slice(0,l));f.writeFileSync(d+'/exit.txt',''+w)}
