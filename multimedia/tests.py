from core.models import HomePage
from wagtail.tests.utils import WagtailPageTests

from .models import (
    MultimediaListPage,
    MultimediaPage,
    MultimediaSeriesListPage,
    MultimediaSeriesPage,
)


class MultimediaListPageTests(WagtailPageTests):
    def test_multimedialistpage_parent_page_types(self):
        self.assertAllowedParentPageTypes(
            MultimediaListPage,
            {HomePage},
        )

    def test_multimedialistpage_child_page_types(self):
        self.assertAllowedSubpageTypes(
            MultimediaListPage,
            {MultimediaPage},
        )


class MultimediaPageTests(WagtailPageTests):
    def test_multimediapage_parent_page_types(self):
        self.assertAllowedParentPageTypes(
            MultimediaPage,
            {MultimediaListPage},
        )

    def test_multimediapage_child_page_types(self):
        self.assertAllowedSubpageTypes(
            MultimediaPage,
            {},
        )


class MultimediaSeriesListPageTests(WagtailPageTests):
    def test_multimediaserieslistpage_parent_page_types(self):
        self.assertAllowedParentPageTypes(
            MultimediaSeriesListPage,
            {HomePage},
        )

    def test_multimediaserieslistpage_child_page_types(self):
        self.assertAllowedSubpageTypes(
            MultimediaSeriesListPage,
            {MultimediaSeriesPage},
        )


class MultimediaSeriesPageTests(WagtailPageTests):
    def test_multimediaseriespage_parent_page_types(self):
        self.assertAllowedParentPageTypes(
            MultimediaSeriesPage,
            {HomePage, MultimediaSeriesListPage},
        )

    def test_multimediaseriespage_child_page_types(self):
        self.assertAllowedSubpageTypes(
            MultimediaSeriesPage,
            {},
        )


class MultimediaPageViewSetTests(WagtailPageTests):
    fixtures = ['multimedia_search_table.json']

    def setUp(self):
        home_page = HomePage.objects.get()
        home_page.numchild = 2
        home_page.save()

    def test_page_1_query_returns_200(self):
        response = self.client.get('/api/multimedia/')
        self.assertEqual(response.status_code, 200)
