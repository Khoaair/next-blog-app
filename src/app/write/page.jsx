'use client';

import Image from 'next/image';
import styles from './write.module.css';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div className={styles.write}>
      <input type='text' placeholder='Title' className={styles.write__input} />
      <div className={styles.write__editor}>
        <button className={styles.write__button} onClick={() => setOpen(!open)}>
          <Image src='/plus.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.add__button}>
              <Image src='/image.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.add__button}>
              <Image src='/external.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.add__button}>
              <Image src='/video.png' alt='' width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.text__area}
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Tell your story...'
        />
      </div>
      <button className={styles.write__public}>Publish</button>
    </div>
  );
};
export default WritePage;
