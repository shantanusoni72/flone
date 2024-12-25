import './style.css';

export default function Button({ text, link }) {
  return (
    <div className='button'>
      <a href={link}>{text}</a>
    </div>
  )
}
