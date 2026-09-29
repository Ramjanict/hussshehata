import { baseAPI } from "@/store/baseApi/baseApi";
import type {
  ClinicPlayLoad,
  PartnerClinicResponse,
  ProgramListParams,
  ProgramListResponse,
  SupplementApiResponse,
  SupplementParams,
} from "./types/essential";

export const essentialManagement = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getPartner: build.query<PartnerClinicResponse, void>({
      query: () => ({
        url: "/partner-clinics",
        method: "GET",
      }),
      providesTags: ["partner"],
    }),
    postPartner: build.mutation<any, ClinicPlayLoad>({
      query: (data) => ({
        url: "/partner-clinics",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["partner"],
    }),
    updatePartner: build.mutation<any, { id: string; data: ClinicPlayLoad }>({
      query: ({ data, id }) => ({
        url: `/partner-clinics/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["partner"],
    }),
    deletePartner: build.mutation<any, string>({
      query: (id) => ({
        url: `/partner-clinics/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["partner"],
    }),
    // supplement
    getSupplement: build.query<SupplementApiResponse, SupplementParams>({
      query: (params) => ({
        url: `/suppliment-product`,
        method: "GET",
        params,
      }),
      providesTags: ["supplement"],
    }),
    postSupplement: build.mutation<any, FormData>({
      query: (data) => ({
        url: `/suppliment-product/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supplement"],
    }),
    updateSupplement: build.mutation<any, { id: string; data: FormData }>({
      query: ({ data, id }) => ({
        url: `/suppliment-product/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["supplement"],
    }),
    deleteSupplement: build.mutation<any, string>({
      query: (id) => ({
        url: `/suppliment-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplement"],
    }),
    getAllProgramCard: build.query<ProgramListResponse, ProgramListParams>({
      query: (params) => ({
        url: `/content-management-programme-programme/all-programme`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useGetPartnerQuery,
  usePostPartnerMutation,
  useDeletePartnerMutation,
  useUpdatePartnerMutation,

  // supplement
  useGetSupplementQuery,
  usePostSupplementMutation,
  useDeleteSupplementMutation,
  useUpdateSupplementMutation,
  //
  useGetAllProgramCardQuery,
} = essentialManagement;
