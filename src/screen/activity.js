import React, { Component } from 'react';
import { Container, Button, Content, Form, Item, Input ,Text} from 'native-base';
export default class Activity extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button full info>
            <Text>Primary</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}