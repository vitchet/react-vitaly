export const List = ({ items, itemComponent }) => {
  return (
    <ul>
      {items.map((item) => {
        const key = item.id;
        if (key === undefined) {
          console.warn(
            'List items should contain "id" field to be used as a key.'
          );
        }
        return <li key={key}>{itemComponent(item)}</li>;
      })}
    </ul>
  );
};
