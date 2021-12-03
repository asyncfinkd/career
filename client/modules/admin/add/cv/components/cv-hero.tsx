import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-toastify';

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

  return (
    <>
      <p style={{ marginBottom: 20, fontFamily: 'MarkGEO' }}>სათაური</p>
      <QuillNoSSRWrapper
        value={title}
        onChange={setTitle}
        modules={modules}
        formats={formats}
        theme="snow"
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
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        value={location}
        onChange={setLocation}
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
                time: '12',
                location: location,
              })
              .then((result) => {
                if (result.data.success) {
                  toast.success('გილოცავთ, ახალი CV წარმატებით დაემატა');

                  setLocation('');
                  setDescription('');
                  setTitle('');
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
