
import BlueCircle from './BlueCircle';

export default function BlueSquare() {
  return (
    <div className="blue-square">
      <h3>Your result</h3>
      <BlueCircle />
      <h2>Great</h2>
      <p className="score-tex">Your score higher than 65% of the people who have taken these tests.</p>
    </div>
  );
}