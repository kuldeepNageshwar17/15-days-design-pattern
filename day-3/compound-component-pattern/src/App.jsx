// import Modal from "./messy/Modal";
import { useState } from "react";

import Modal from "./with-pattern/modal/Modal";
import Tabs from "./with-pattern/tab/Tab";

import "./App.css";
import Card from "./messy/Card";
import CompoundCard from "./with-pattern/card/Card";
import ExpandableCard from "./with-pattern/card/ExpandableCard";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <div className="flex flex-col items-center">
        <Modal isOpen={isOpen} onClose={handleClose}>
          <Modal.Header>Delete Item</Modal.Header>
          <Modal.Image>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsZXRlJTIwaXRlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Delete Item"
            />
          </Modal.Image>
          <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-secondary mr-2">
              help
            </button>
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary"></button>
            Delete
          </Modal.Footer>
        </Modal>

        {/* Example usage of the messy Card component */}
        <div style={{ width: "100%", maxWidth: 700, marginTop: 24 }}>
          <Card
            title="Messy Card Example"
            subtitle="Single-file component with many props"
            image="https://picsum.photos/800/360"
            badge="New"
            footer={<span>Card footer content — meta info</span>}
          >
            <p>
              This card demonstrates how to pass multiple props into the messy
              Card component. Use actions to trigger callbacks.
            </p>
          </Card>
        </div>

        {/* Compound component Card usage */}
        <div style={{ width: "100%", maxWidth: 700, marginTop: 24 }}>
          <CompoundCard>
            <CompoundCard.Image>
              <img src="https://picsum.photos/800/360?2" alt="Compound card" />
            </CompoundCard.Image>

            <CompoundCard.Header>Compound Card Example</CompoundCard.Header>
            <CompoundCard.SubHeader>
              Built with compound components
            </CompoundCard.SubHeader>
            <CompoundCard.Body>
              <p>
                This demonstrates a card broken into semantically named
                subcomponents. Consumers decide which parts to include and in
                what order.
              </p>
            </CompoundCard.Body>
            <CompoundCard.Footer>
              <button type="button" className="btn btn-primary">
                Action
              </button>
            </CompoundCard.Footer>
          </CompoundCard>
        </div>

        {/* Expandable / interactive card with additional feature */}
        <div style={{ width: "100%", maxWidth: 700, marginTop: 24 }}>
          <ExpandableCard
            title="Expandable Card"
            subtitle="Extra features"
            image="https://picsum.photos/800/360?3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
          </ExpandableCard>
        </div>

        {/* Tabs (compound component pattern) */}
        <div style={{ width: "100%", maxWidth: 700, marginTop: 24 }}>
          <Tabs defaultIndex={0}>
            <Tabs.List>
              <Tabs.Tab>Overview</Tabs.Tab>
              <Tabs.Tab>Details</Tabs.Tab>
              <Tabs.Tab>Stats</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panels>
              <Tabs.Panel>
                <p style={{ margin: 0 }}>
                  This is an overview panel. Summarize here.
                </p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p style={{ margin: 0 }}>
                  Detailed information lives in this panel.
                </p>
              </Tabs.Panel>
              <Tabs.Panel>
                <p style={{ margin: 0 }}>
                  Some statistics or charts would appear here.
                </p>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default App;
