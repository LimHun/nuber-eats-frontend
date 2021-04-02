import { render, waitFor } from "../../test-utils";
import React from "react";
import { Podcasts } from "../podcast";
import { ApolloProvider } from "@apollo/client";
import { createMockClient, MockApolloClient } from "mock-apollo-client";
import { RenderResult } from "@testing-library/react";
import { PodcastDetail } from "../podcastDetail";

describe("<PodcastDetail />", () => {
	let renderResult: RenderResult;
	let mockedClient: MockApolloClient;
	beforeEach(async () => {
		await waitFor(async () => {
			mockedClient = createMockClient();
			renderResult = render(
				<ApolloProvider client={mockedClient}>
					<PodcastDetail />
				</ApolloProvider>
			);
		});
	});

	it("should render OK", async () => {
		await waitFor(() => {
			expect(document.title).toBe("Podcast | detail");
		});
	});
});
