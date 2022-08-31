import { useState, useEffect, useCallback, useMemo } from "react";

const useStorageHook = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState<string>();
  //action is Create, Read, Update, Delete
  const actionList = ["create", "read", "update", "delete"];

  const handleAction = async (action: string, payload: any) => {
    setLoading(true);
    if (actionList.includes(action)) {
      try {
        if (action === "create") {
          const jsonValue = localStorage.getItem("@saks");

          const finalValue = jsonValue != null ? JSON.parse(jsonValue) : [];
          localStorage.setItem(
            "@saks",
            JSON.stringify([...payload, ...finalValue])
          );
          setData(payload);
          setLoading(false);
          return payload;
        }
        if (action === "read") {
          const jsonValue = localStorage.getItem("@saks");
          setData(jsonValue != null ? JSON.parse(jsonValue) : null);
          setLoading(false);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        }
        if (action === "update") {
          const jsonValue = localStorage.getItem("@saks");
          setData(jsonValue != null ? JSON.parse(jsonValue) : null);
          setLoading(false);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        }
        if (action === "delete") {
          const jsonValue = localStorage.getItem("@saks");
          setData(jsonValue != null ? JSON.parse(jsonValue) : null);
          setLoading(false);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        }
      } catch (err) {
        setError(JSON.parse(err as unknown as string));
        return JSON.parse(err as unknown as string);
      } finally {
        setLoading(false);
      }
    } else {
      setError("only lower cased CRUD action is allowed");
    }
  };

  return {
    handleAction,
    loading,
    data,
    error,
  };
};

export default useStorageHook;
