import * as React from 'react';

interface EmailTemplateProps {
  text: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  text,
  email,
}) => (
  <div>
    <h3>{email}</h3>
    <br />
    <h2>{text}</h2>
  </div>
);
