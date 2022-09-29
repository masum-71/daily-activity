import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h1>This is Blog section</h1>

      <h3>
        <strong>Question 1:</strong> How does react work
      </h3>
      <p>
        <strong>Answer:</strong>While building client-side apps, a team of
        Facebook developers realized that the DOM is slow (The Document Object
        Model (DOM) is an application programming interface (API) for HTML and
        XML documents. It defines the logical structure of documents and the way
        a document is accessed and manipulated.). So, to make it faster, React
        implements a virtual DOM that is basically a DOM tree representation in
        JavaScript. So when it needs to read or write to the DOM, it will use
        the virtual representation of it. Then the virtual DOM will try to find
        the most efficient way to update the browser’s DOM. Unlike browser DOM
        elements, React elements are plain objects and are cheap to create.
        React DOM takes care of updating the DOM to match the React elements.
        The reason for this is that JavaScript is very fast and it’s worth
        keeping a DOM tree in it to speed up its manipulation. Although React
        was conceived to be used in the browser, because of its design it can
        also be used in the server with Node.js.
      </p>
      <h3>
        <strong>Question 2:</strong> Difference between props and state in react
      </h3>
      <p>
        <strong>props</strong> <br />
        Props (short for properties) are a Component's configuration. They are
        received from above and immutable as far as the Component receiving them
        is concerned. A Component cannot change its props, but it is responsible
        for putting together the props of its child Components. Props do not
        have to just be data -- callback functions may be passed in as props.{" "}
        <br />
        <strong>state</strong> <br />
        The state is a data structure that starts with a default value when a
        Component mounts. It may be mutated across time, mostly as a result of
        user events. A Component manages its own state internally. Besides
        setting an initial state, it has no business fiddling with the state of
        its children. You might conceptualize state as private to that component
      </p>
      <h3>
        <strong>Question 3:</strong>what is useeffect used for
        </h3>
        <p>
          The useEffect hook allows us to respond to changes in the component
          lifecycle. The component lifecycle refers to a set of events that
          occur from the time a component is mounted to the DOM until it is
          removed. useEffect is most commonly used to execute code when the
          component is initially rendered, when it is updated, and when it is
          unmounted.useEffect accepts a function and a dependency array as
          arguments. The function will be executed when a variable in the
          dependency array changes. If no dependency array is provided, the
          function will run every time the component is re-rendered. If the
          dependency array is empty, the function will only be run when the
          component first mounts to the DOM. A common use case for an empty
          dependency array would be when fetching data from an API.useEffect can
          also run a function when the component unmounts, often called a clean
          up function. This is useful when using setInterval or event based
          libraries to clear an interval or an event listener that was set
          during the component lifecycle.
        </p>
      
    </div>
  );
};

export default Blog;
