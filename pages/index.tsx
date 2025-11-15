import { Component } from "react";
import Meta from "../components/meta";

export default class HomepageStub extends Component<{}, {}> {
  render() {
    return (
      <>
        <Meta
          title="Andrew Sutherland"
          description="On the lookout for wonder"
        />
        <style jsx>{`
          :global(:root) {
            --bg-color: var(--lightBlue);
            --dark-bg-color: var(--darkLightBlue);
          }
        `}</style>
      </>
    );
  }
}
