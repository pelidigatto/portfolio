import styles from './alert.module.css';
import { clsx } from 'clsx';



export default function Alert({ type,errorMsg }) {

    return (
        <div
        className={clsx({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error',
        })}
        >
  
        {
            errorMsg
        }
    
      
    </div>
  );
}