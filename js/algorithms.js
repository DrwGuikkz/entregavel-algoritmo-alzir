/* Algorithms data: display code for Java/JS and JS implementations used to actually run */
const ALGORITHMS = {
  isEven: {
    name: 'isEven',
    display:{
      java:[
        'public class IsEven {',
        '  public static void main(String[] args) {',
        '    System.out.print("Enter number: ");',
        '    int n = Integer.parseInt(new java.util.Scanner(System.in).nextLine());',
        '    System.out.println(n % 2 == 0 ? "Even" : "Odd");',
        '  }',
        '}'
      ].join('\n'),
      js:[
        'const n = parseInt(prompt("Enter number:"), 10);',
        'console.log(n % 2 === 0 ? "Even" : "Odd");'
      ].join('\n')
    },
    params:[{name:'n',label:'Number',type:'number'}],
    run: ({n})=> ({out: (n%2===0? 'Even' : 'Odd')})
  },

  summation: {
    name:'Summation',
    display:{
      java:['int sum=0; for(int i=1;i<=n;i++) sum+=i; System.out.println(sum);'].join('\n'),
      js:['let sum=0; for(let i=1;i<=n;i++) sum+=i; console.log(sum);'].join('\n')
    },
    params:[{name:'n',label:'N (sum 1..N)',type:'number'}],
    run: ({n})=>{let s=0;for(let i=1;i<=n;i++)s+=i;return {out:String(s)}}
  },

  fibonacci: {
    name:'Fibonacci',
    display:{
      java:['int a=0,b=1; for(int i=0;i<n;i++){ System.out.println(a); int t=a+b; a=b; b=t;}'].join('\n'),
      js:['let a=0,b=1; for(let i=0;i<n;i++){ console.log(a); [a,b]=[b,a+b]; }'].join('\n')
    },
    params:[{name:'n',label:'Count (n)',type:'number'}],
    run: ({n})=>{let a=0,b=1,out=[];for(let i=0;i<n;i++){out.push(String(a));[a,b]=[b,a+b];}return{out:out.join('\n')}}
  },

  gcd: {
    name:'GCD',
    display:{
      java:['int a = 12, b = 18;', 'while(b!=0){int t=a%b;a=b;b=t;}','System.out.println(a);'].join('\n'),
      js:['function gcd(a,b){while(b){[a,b]=[b,a%b];}return a;}','console.log(gcd(a,b));'].join('\n')
    },
    params:[{name:'a',label:'A',type:'number'},{name:'b',label:'B',type:'number'}],
    run: ({a,b})=>{a=Math.abs(a);b=Math.abs(b);while(b){let t=a%b;a=b;b=t;}return{out:String(a)}}
  },

  sorting: {
    name:'Sorting',
    display:{
      java:['int[] arr = {5,3,8,1}; Arrays.sort(arr); for(int v:arr) System.out.print(v+" ");'].join('\n'),
      js:['let arr = input.split(",").map(Number); arr.sort((a,b)=>a-b); console.log(arr.join(", "));'].join('\n')
    },
    params:[{name:'arr',label:'Comma-separated numbers',type:'text'}],
    run: ({arr})=>{let a=arr.split(',').map(s=>Number(s.trim())).filter(x=>!Number.isNaN(x));a.sort((x,y)=>x-y);return{out:a.join(', ')}}
  },

  count: {
    name:'Count',
    display:{
      java:['int count=0; for(int v:arr) if(v==x) count++; System.out.println(count);'].join('\n'),
      js:['const arr = input.split(",").map(Number); const x = Number(target); let c=arr.filter(v=>v===x).length; console.log(c);'].join('\n')
    },
    params:[{name:'arr',label:'Comma-separated numbers',type:'text'},{name:'target',label:'Target value',type:'number'}],
    run: ({arr,target})=>{let a=arr.split(',').map(s=>Number(s.trim())).filter(x=>!Number.isNaN(x));let c=a.filter(v=>v===Number(target)).length;return{out:String(c)}}
  }
}
