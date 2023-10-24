import { logRenders } from '../../shelper/debug';

const MyComponent = logRenders('MyComponent')((props) => {
  return <div>{props.children}</div>;
});

function MyPage() {
  return (
    <div>
      <MyComponent>Hello World!</MyComponent>
      <MyComponent>Goodbye World!</MyComponent>
    </div>
  );
}

export default MyPage;
