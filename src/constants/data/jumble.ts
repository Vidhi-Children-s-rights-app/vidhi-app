const arr=[1,2,3,4,5];
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export default function getArray() {

  const JumbledArrayElements: {
    char: string;
    visited: boolean;
  }[][] = arr.map(()=>{
    return arr.map(() =>{
      let result = ' ';
      const charactersLength = characters.length;
      result = characters.charAt(Math.floor(Math.random() * charactersLength));
      return {char:result,visited:false};
    });
  });
  JumbledArrayElements[2][2].char='J';
  JumbledArrayElements[1][2].char='U';
  JumbledArrayElements[1][1].char='D';
  JumbledArrayElements[1][0].char='G';
  JumbledArrayElements[2][0].char='E';
  return JumbledArrayElements;
}