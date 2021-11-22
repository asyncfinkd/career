import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

export default function JobDescription({ data }: any) {
  const sanitizer = DOMPurify.sanitize;
  return (
    <>
      <div
        role="article"
        className="ql-editor py-6 hh-job-description"
        style={{
          color: 'rgba(45,55,72, 1)',
          fontFamily: 'MarkGEO',
        }}
        dangerouslySetInnerHTML={{
          __html: sanitizer(data.description),
        }}
      ></div>
    </>
  );
}
