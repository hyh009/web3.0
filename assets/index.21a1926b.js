var z=Object.defineProperty,D=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var R=(t,e,a)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,v=(t,e)=>{for(var a in e||(e={}))H.call(e,a)&&R(t,a,e[a]);if(L)for(var a of L(e))K.call(e,a)&&R(t,a,e[a]);return t},W=(t,e)=>D(t,G(e));import{j as T,r as o,H as U,A as Q,B as V,a as X,R as Y,b as I,p as J,W as Z,C as f0,S as e0,c as t0,d as a0}from"./vendor.cf8d6b63.js";const s0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}};s0();const f=T.exports.jsx,n=T.exports.jsxs,n0=T.exports.Fragment,r0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-800"})});var M="/web3.0/assets/logo.60ecbcf0.png";const $=({title:t,classProps:e})=>f("li",{className:`mx-4 cursor-pointer list-none ${e}`,children:t}),c0=()=>{const[t,e]=o.exports.useState(!1);return n("nav",{className:"w-full flex md:justify-center justify-between items-center p-4 2xl:px-10",children:[f("div",{className:"md:flex-[0.5] flex-initial justify-center items-center 2xl:flex-1",children:f("img",{src:M,alt:"logo",className:"w-32 cursor-pointer"})}),n("ul",{className:"text-white md:flex hidden items-center 2xl:justify-end 2xl:flex-1",children:[["Market","Exchange","Tutorials","Wallets"].map((a,r)=>f($,{title:a},a+r)),f("li",{className:"bg-[#4f1974] py-2 px-7 mx-4 text-white rounded-full list-none cursor-pointer hover:bg-[#5c1d86]",children:"Login"})]}),n("div",{className:"flex relative ",children:[!t&&f(U,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),t&&n("ul",{className:"z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(Q,{className:"text-white cursor-pointer",onClick:()=>e(!1)})}),["Market","Exchange","Tutorials","Wallets"].map((a,r)=>f($,{title:a,classProps:"my-2 text-lg text-white"},a+r))]})]})]})},j=({color:t,title:e,icon:a,subtitle:r,innerRef:s})=>n("div",{ref:s,className:"opacity-0 flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-x",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${t}`,children:a}),n("div",{className:"ml-5 flex flex-col flex-1",children:[f("h3",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-2 text-white text-sm md:w-9/12",children:r})]})]}),l0=()=>{const t=o.exports.useRef([]);return o.exports.useEffect(()=>{const e={threshold:.5,rootMargin:"0px"},a=new IntersectionObserver(function(s){s.forEach(c=>{if(c.isIntersecting)c.target.classList.add("animate-slide-in-right"),a.unobserve(c.target);else return})},e);t.current&&t.current.forEach(r=>{r&&a.observe(r)})},[t]),n("div",{className:"flex w-full flex-col mf:flex-row justify-center items-center gradient-bg-services 2xl:px-20",children:[f("div",{className:"flex mf:flex-row flex-col items-center justify-between md:p-10 py-12 px-4",children:f("div",{className:"flex-1 flex-col justify-start items-start",children:n("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient",children:["Services that we ",f("br",{})," continue to imporve"]})})}),n("div",{className:"flex-1 flex flex-col justify-start items-center 2xl:items-end",children:[f(j,{innerRef:e=>t.current[0]=e,color:"bg-[#2952E3]",title:"security Guaranteed",icon:f(V,{fontSize:21,className:"text-white"}),subtitle:"Security is guaranted. We always maintain privacy and maintain the quality of our product."}),f(j,{innerRef:e=>t.current[1]=e,color:"bg-[#8945F8]",title:"Best exchange rates",icon:f(X,{fontSize:21,className:"text-white"}),subtitle:"Security is guaranted. We always maintain privacy and maintain the quality of our product."}),f(j,{innerRef:e=>t.current[2]=e,color:"bg-[#F84550]",title:"Fastest transactions",icon:f(Y,{fontSize:21,className:"text-white"}),subtitle:"Security is guaranted. We always maintain privacy and maintain the quality of our product."})]})]})},i0="hh-sol-artifact-1",o0="Transactions",b0="contracts/Transactions.sol",d0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"recevier",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],m0="0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea26469706673582212208d4c59ce58382d09a8ee500a76524bbf4b904c2dedbf5f0d5b695e9d7186afda64736f6c63430008000033",u0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea26469706673582212208d4c59ce58382d09a8ee500a76524bbf4b904c2dedbf5f0d5b695e9d7186afda64736f6c63430008000033",x0={},h0={};var p0={_format:i0,contractName:o0,sourceName:b0,abi:d0,bytecode:m0,deployedBytecode:u0,linkReferences:x0,deployedLinkReferences:h0};const y0=p0.abi,g0="0xe870aAF22EC101f4a75Eba78ca1E62b3C1766c2d",C=I.createContext(),{ethereum:m}=window,k=()=>{const e=new Z(m).getSigner();return new f0(g0,y0,e)},w0=({children:t})=>{const[e,a]=o.exports.useState(""),[r,s]=o.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[c,i]=o.exports.useState(!1),[b,x]=o.exports.useState(localStorage.getItem("transactionCount")),[y,g]=o.exports.useState([]),w=(l,u)=>{s(h=>W(v({},h),{[u]:l.target.value}))},N=async()=>{try{if(!m)return alert("Please install metamask");const h=(await k().getAllTransactions()).map(d=>({addressTo:d.receiver,addressFrom:d.sender,timestamp:new Date(d.timestamp.toNumber()*1e3).toLocaleString(),message:d.message,keyword:d.keyword,amount:parseInt(d.amount._hex)/10**18}));g(h)}catch(l){console.log(l)}},B=async()=>{try{if(!m)return alert("Please install metamask.");const l=await m.request({method:"eth_accounts"});l.length?(a(l[0]),N()):console.log("No accounts found.")}catch(l){throw console.log(l),new Error("No ethereum object.")}},F=async()=>{try{if(!m)return alert("Please install metamask.");const l=await m.request({method:"eth_requestAccounts"});a(l[0])}catch(l){throw console.log(l),new Error("No ethereum object.")}},_=async()=>{try{if(!m)return alert("Please install metamask.");const{addressTo:l,amount:u,keyword:h,message:d}=r,E=k(),A=J(u);await m.request({method:"eth_sendTransaction",params:[{from:e,to:l,gas:"0x5208",value:A._hex}]});const q=await E.addToBlockchain(l,A,d,h);i(!0),await q.wait(),i(!1);const O=await E.getTransactionCount();x(O.toNumber())}catch(l){console.log(l)}},P=async()=>{try{const u=await k().getTransactionCount();window.localStorage.setItem("transactionCount",u)}catch{}};return o.exports.useEffect(()=>{B(),P()},[]),f(C.Provider,{value:{connectWallet:F,currentAccount:e,formData:r,sendTransaction:_,handleChange:w,isLoading:c,transactions:y},children:t})},S=t=>`${t.slice(0,5)}...${t.slice(t.length-4)}`,N0="L4WwAKQWx80VkQGtLafXUpv7rteR2Gqp",v0=({keyword:t})=>{const[e,a]=o.exports.useState(""),r=async()=>{var s,c,i;try{const b=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${N0}&q=${t.split(" ").join("")}&limit=1`),{data:x}=await b.json();a((i=(c=(s=x[0])==null?void 0:s.images)==null?void 0:c.downsized_medium)==null?void 0:i.url)}catch{a("https://media.giphy.com/media/WsRwTdb9xwm7kiKuxL/giphy.gif")}};return o.exports.useEffect(()=>{t&&r()},[t]),e},T0=({addressTo:t,addressFrom:e,timestamp:a,message:r,amount:s,keyword:c,url:i})=>{const b=v0({keyword:c});return f("div",{className:"m-4 bg-[#181918] flex      \r flex-col p-3 rounded-md hover:shadow-2xl",children:n("div",{className:"flex flex-col items-center w-full mt-3",children:[n("div",{className:"w-full mb-6 p-2",children:[f("a",{href:`https://ropsten.etherscan.io/address/${e}`,target:"_blank",rel:"noopener noreferrer",children:n("p",{className:"text-white text-base",children:["From: ",S(e)]})}),f("a",{href:`https://ropsten.etherscan.io/address/${t}`,target:"_blank",rel:"noopener noreferrer",children:n("p",{className:"text-white text-base",children:["To: ",S(t)]})}),n("p",{className:"text-white text-base",children:["Amount: ",s," ETH"]}),r&&n(n0,{children:[f("br",{}),n("p",{className:"text-white text-base",children:["Message: ",r]})]})]}),f("img",{src:b||i,alt:"gif",className:"w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"}),f("div",{className:"bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl",children:f("p",{className:"text-[#37c7da] font-bold",children:a})})]})})},j0=()=>{const{currentAccount:t,transactions:e}=o.exports.useContext(C);return f("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:n("div",{className:"flex flex-col md:p-12 py-12 px-4",children:[t?f("h3",{className:"text-white text-3xl text-center my-2",children:"Latest Transactions"}):f("h3",{className:"text-white text-3xl text-center my-2",children:"Connect to your account to see latest transaction."}),f("div",{className:"auto-rows-auto grid justify-center items-center mt-10\r xl:grid-cols-4\r mf:grid-cols-3\r md:grid-cols-2 \r sm:grid-cols-1",children:e.reverse().map((a,r)=>f(T0,v({},a),r))})]})})},p=({placeholder:t,name:e,type:a,value:r,handleChange:s})=>f("input",{placeholder:t,type:a,name:e,step:"0.0001",value:r,onChange:c=>s(c,e),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),C0=()=>{const{connectWallet:t,currentAccount:e,formData:a,sendTransaction:r,handleChange:s,isLoading:c}=o.exports.useContext(C),i=x=>{x.preventDefault();const{addressTo:y,amount:g,keyword:w,message:N}=a;!y||!g||!w||!N||r()},b="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm text-white text-light";return f("div",{className:"flex w-full items-center justify-center 2xl:justify-around",children:n("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 2xl:w-full",children:[n("div",{className:"flex flex-1 justify-start flex-col mf:mr-10",children:[n("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Send Crypto ",f("br",{})," across the world"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto."}),!e&&f("button",{type:"button",onClick:t,className:"flex flex-row justify-center items-center my-5 p-3 rounded-full cursor-pointer bg-[#4f1974] hover:bg-[#5c1d86]",children:f("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})}),n("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${b}`,children:"Reliability"}),f("div",{className:`sm:rounded-tr-none rounded-tr-2xl ${b}`,children:"Security"}),f("div",{className:`rounded-none sm:rounded-tr-2xl ${b}`,children:"Ethereum"}),f("div",{className:`sm:rounded-bl-2xl ${b}`,children:"Web 3.0"}),f("div",{className:`sm:rounded-bl-none rounded-bl-2xl ${b}`,children:"Reliability"}),f("div",{className:`rounded-br-2xl ${b}`,children:"Blockchain"})]})]}),n("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 justify-end items-start flex-col rounded-xl  aspect-[1.586/1] md:w-72 w-full mb-5 eth-card white-glassmorphism",children:n("div",{className:"flex justify-between flex-col w-full h-full ",children:[n("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-neutral-300 flex justify-center items-center",children:f(e0,{fontSize:21,color:"rgb(212 212 212)"})}),f(t0,{fontSize:17,color:"rgb(212 212 212)"})]}),n("div",{children:[f("p",{className:"text-neutral-300 font-light text-sm",children:e?S(e):"Address"}),f("p",{className:"text-neutral-300 font-semibold text-lg mt-1",children:"Ethereum"})]})]})}),n("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(p,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:s}),f(p,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:s}),f(p,{placeholder:"Keyword(Gif)",name:"keyword",type:"text",handleChange:s}),f(p,{placeholder:"Enter Message",name:"message",type:"text",handleChange:s}),f("div",{className:"w-full h-[1px] bg-gray-400 my-2"}),c?f(r0,{}):f("button",{type:"button",className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer",onClick:i,children:"Send Now"})]})]})]})})},k0=()=>n("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[n("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[f("div",{className:"flex flex-[0.5] justify-center items-center",children:f("img",{src:M,alt:"logo",className:"w-32"})}),n("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Market"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Exchange"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Tutorials"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Wallets"})]})]}),n("div",{className:"flex justify-center items-center flex-col mt-5",children:[f("p",{className:"text-white text-sm text-center",children:"Come join us"}),f("p",{className:"text-white text-sm text-center",children:"info@kryptotest.com"})]}),f("div",{className:"w-full sm:w-[90%] h-[0.25px] bg-gray-400 mt-5"}),n("div",{className:"w-full sm:w-[90%] flex justify-between items-center mt-3",children:[f("p",{className:"text-white text-sm text-center",children:"@kryptotest 2022"}),f("p",{className:"text-white text-sm text-center",children:"All rights reserverd"})]})]});function S0(){return n("div",{className:"min-h-screen",children:[n("div",{className:"gradient-bg-welcome",children:[f(c0,{}),f(C0,{})]}),f(l0,{}),f(j0,{}),f(k0,{})]})}a0.render(f(w0,{children:f(I.StrictMode,{children:f(S0,{})})}),document.getElementById("root"));
