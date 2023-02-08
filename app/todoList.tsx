"use client";

export default function TodoList({ data, setData }: any) {
  function doneTask(t: any) {
    let arr: any = [];
    data.forEach((d: any) => {
      if (d.id === t.id) {
        d.complete = !d.complete;
      }
      arr.push(d);
    });

    setData(arr);
  }

  function deleteTask(t: any) {
    let arr: any = [];
    data.forEach((d: any) => {
      if (d.id !== t.id) {
        arr.push(d);
      }
    });

    setData(arr);
  }

  return (
    <>
      {data.map((t: any, i: Number) => {
        return (
          <li key={t.id} style={{ padding: "5px 0" }}>
            {t.complete ? <s>{t.task}</s> : t.task}

            <button
              style={{ color: "red", margin: "5px" }}
              onClick={() => {
                deleteTask(t);
              }}
            >
              Delete
            </button>
            <button
              style={{ color: "lightgreen", margin: "5px" }}
              onClick={() => {
                doneTask(t);
              }}
            >
              Done
            </button>
          </li>
        );
      })}
    </>
  );
}
