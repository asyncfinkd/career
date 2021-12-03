import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';

export default function CVHero() {
  // @ts-ignore
  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');

  return (
    <>
      <p style={{ marginTop: 20, marginBottom: 20, fontFamily: 'MarkGEO' }}>
        სათაური
      </p>
      <TextField
        type="text"
        label={'სათაური'}
        sx={{ width: '100%' }}
        variant="filled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p style={{ marginTop: 20, marginBottom: 20, fontFamily: 'MarkGEO' }}>
        აღწერა
      </p>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        value={description}
        onChange={setDescription}
      />
      <p style={{ marginTop: 20, marginBottom: 20, fontFamily: 'MarkGEO' }}>
        ადგილმდებარეობა
      </p>
      <TextField
        type="text"
        label={'ადგილმდებარეობა'}
        sx={{ width: '100%' }}
        variant="filled"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <p style={{ marginTop: 20, marginBottom: 20, fontFamily: 'MarkGEO' }}>
        განაკვეთი
      </p>
      <TextField
        type="text"
        label={'განაკვეთი'}
        sx={{ width: '100%' }}
        variant="filled"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ width: '100%', height: 40, mt: 3 }}
        type="submit"
        onClick={() => {
          if (title && description && location) {
            axios
              .post(`${process.env.SERVER_API_URL}/api/add/post`, {
                title: title,
                description: description,
                time: time,
                location: location,
              })
              .then((result) => {
                if (result.data.success) {
                  toast.success('გილოცავთ, ახალი CV წარმატებით დაემატა');

                  setLocation('');
                  setDescription('');
                  setTitle('');
                  setTime('');
                }
              });
          }
        }}
      >
        დამატება
      </Button>
    </>
  );
}
