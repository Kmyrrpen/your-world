import dispatch from "@/app/dispatch";
import { Meta } from "@/app/types";
import { SET_META } from "@/app/world/actions";
import React, { useState } from "react";

type Props = {
  meta: Meta;
};

const Editor: React.FC<Props> = ({ meta }) => {
  const [draftMeta, setDraftMeta] = useState(meta);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDraftMeta((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(SET_META(draftMeta));
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} name="name" value={meta.name} />
      <textarea
        onChange={onChange}
        name="description"
        value={meta.description}
      />
    </form>
  );
};

export default Editor;
