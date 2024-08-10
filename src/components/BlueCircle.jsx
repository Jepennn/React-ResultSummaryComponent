
import data from '../data.json';

export default function BlueCircle() {

   const totalScore = data.reduce((acc, item) => acc + item.score, 0); 
   const avgScore = (totalScore / data.length).toFixed(0);

  return (
    <div className="blue-circle">
        <h1>{avgScore}</h1>
        <p>of 100</p>
    </div>
  ); 
}