<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout>
            <Label class="info">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf135; "/>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
        </GridLayout>
    </Page>
</template>

<script>
import gql from "graphql-tag";

  export default {
    created() {
        this.apolloRequest()
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
      },
      methods: {
            apolloRequest() {
                const LoginQuery = gql`
 query MyQuery {
  delivery_status {
    closed_at
    created_at
    helper_user_id
    receipt_amount
    status
  }
}
`;
      console.log("Apollo Query")
      try {
        this.$apollo
          .query({
            query: LoginQuery,
            variables: {  }
          })
          .then(data => {
            console.log("Apollo Answer")
            console.log(data);
            
          });
      } catch (e) {
        console.error("mutation error", e);
      }
    },
      }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
