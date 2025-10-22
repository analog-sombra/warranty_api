
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ACCOUNTS = "ACCOUNTS",
    ADMIN = "ADMIN",
    DEALER_ACCOUNTS = "DEALER_ACCOUNTS",
    DEALER_ADMIN = "DEALER_ADMIN",
    DEALER_MANAGER = "DEALER_MANAGER",
    DEALER_SALES = "DEALER_SALES",
    MANUF_ACCOUNTS = "MANUF_ACCOUNTS",
    MANUF_ADMIN = "MANUF_ADMIN",
    MANUF_MANAGER = "MANUF_MANAGER",
    MANUF_SALES = "MANUF_SALES",
    MANUF_TECHNICAL = "MANUF_TECHNICAL",
    SALES = "SALES",
    SYSTEM = "SYSTEM",
    TECHNICAL = "TECHNICAL",
    USER = "USER"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export interface CreateCityInput {
    name: string;
}

export interface CreateCompanyInput {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    contact_person: string;
    contact_person_number: string;
    createdById: number;
    designation: string;
    email: string;
    gst?: Nullable<string>;
    logo: string;
    name: string;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    website?: Nullable<string>;
    zone_id: number;
}

export interface CreateProductCategoryInput {
    createdById: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    status?: Nullable<Status>;
}

export interface CreateProductInput {
    createdById: number;
    description?: Nullable<string>;
    image?: Nullable<string>;
    name: string;
    price: number;
    status?: Nullable<Status>;
    subcategory_id: number;
    warranty_time: number;
}

export interface CreateProductSubcategoryInput {
    createdById: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    product_category_id: number;
    status?: Nullable<Status>;
}

export interface CreateUserInput {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    is_dealer: boolean;
    is_manufacturer: boolean;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    zone_id: number;
}

export interface CreateZoneInput {
    city_id: number;
    name: string;
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface SearchPaginationInput {
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SignUpUserInput {
    mobile: string;
    name: string;
    password: string;
}

export interface UpdateCityInput {
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateCompanyInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    contact_number?: Nullable<string>;
    contact_person?: Nullable<string>;
    contact_person_number?: Nullable<string>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    designation?: Nullable<string>;
    email?: Nullable<string>;
    gst?: Nullable<string>;
    logo?: Nullable<string>;
    name?: Nullable<string>;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    website?: Nullable<string>;
    zone_id?: Nullable<number>;
}

export interface UpdateProductCategoryInput {
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface UpdateProductInput {
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    description?: Nullable<string>;
    image?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    status?: Nullable<Status>;
    subcategory_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_time?: Nullable<number>;
}

export interface UpdateProductSubcategoryInput {
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    product_category_id?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface UpdateUserInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    is_dealer?: Nullable<boolean>;
    is_manufacturer?: Nullable<boolean>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    zone_id?: Nullable<number>;
}

export interface UpdateZoneInput {
    city_id?: Nullable<number>;
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface City {
    id: number;
    name: string;
    status: Status;
}

export interface CityPagination {
    data: City[];
    skip: number;
    take: number;
    total: number;
}

export interface Company {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    contact_person: string;
    contact_person_number: string;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    designation?: Nullable<string>;
    email: string;
    gst?: Nullable<string>;
    id: number;
    logo: string;
    name: string;
    pan?: Nullable<string>;
    status: Status;
    updatedAt: DateTime;
    website?: Nullable<string>;
    zone: Zone;
    zone_id: number;
}

export interface CompanyPagination {
    data: Company[];
    skip: number;
    take: number;
    total: number;
}

export interface IMutation {
    createCity(inputType: CreateCityInput): City | Promise<City>;
    createCompany(inputType: CreateCompanyInput): Company | Promise<Company>;
    createProduct(inputType: CreateProductInput): Product | Promise<Product>;
    createProductCategory(inputType: CreateProductCategoryInput): ProductCategory | Promise<ProductCategory>;
    createProductSubcategory(inputType: CreateProductSubcategoryInput): ProductSubcategory | Promise<ProductSubcategory>;
    createUser(inputType: CreateUserInput): User | Promise<User>;
    createZone(inputType: CreateZoneInput): Zone | Promise<Zone>;
    deleteCity(id: number, userid: number): City | Promise<City>;
    deleteCompany(id: number, userid: number): Company | Promise<Company>;
    deleteProduct(id: number, userid: number): Product | Promise<Product>;
    deleteProductCategory(id: number, userid: number): ProductCategory | Promise<ProductCategory>;
    deleteProductSubcategory(id: number, userid: number): ProductSubcategory | Promise<ProductSubcategory>;
    deleteUser(id: number, userid: number): User | Promise<User>;
    deleteZone(id: number, userid: number): Zone | Promise<Zone>;
    optLogin(contact: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateCity(id: number, updateType: UpdateCityInput): City | Promise<City>;
    updateCompany(id: number, updateType: UpdateCompanyInput): Company | Promise<Company>;
    updateProduct(id: number, updateType: UpdateProductInput): Product | Promise<Product>;
    updateProductCategory(id: number, updateType: UpdateProductCategoryInput): ProductCategory | Promise<ProductCategory>;
    updateProductSubcategory(id: number, updateType: UpdateProductSubcategoryInput): ProductSubcategory | Promise<ProductSubcategory>;
    updateUser(id: number, updateType: UpdateUserInput): User | Promise<User>;
    updateZone(id: number, updateType: UpdateZoneInput): Zone | Promise<Zone>;
    verifyOtp(contact: string, otp: string): User | Promise<User>;
}

export interface Product {
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    description?: Nullable<string>;
    id: number;
    image?: Nullable<string>;
    name: string;
    price: number;
    subcategory: ProductSubcategory;
    subcategory_id: number;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    warranty_time: number;
}

export interface ProductCategory {
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    id: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface ProductCategoryPagination {
    data: ProductCategory[];
    skip: number;
    take: number;
    total: number;
}

export interface ProductPagination {
    data: Product[];
    skip: number;
    take: number;
    total: number;
}

export interface ProductSubcategory {
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    id: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    product_category: ProductCategory;
    product_category_id: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface ProductSubcategoryPagination {
    data: ProductSubcategory[];
    skip: number;
    take: number;
    total: number;
}

export interface IQuery {
    getAllCity(): City[] | Promise<City[]>;
    getAllCompany(): Company[] | Promise<Company[]>;
    getAllProduct(): Product[] | Promise<Product[]>;
    getAllProductCategory(): ProductCategory[] | Promise<ProductCategory[]>;
    getAllProductSubcategory(): ProductSubcategory[] | Promise<ProductSubcategory[]>;
    getAllUser(): User[] | Promise<User[]>;
    getAllZone(): Zone[] | Promise<Zone[]>;
    getCityById(id: number): City | Promise<City>;
    getCompanyById(id: number): Company | Promise<Company>;
    getPaginatedCity(searchPaginationInput: SearchPaginationInput): CityPagination | Promise<CityPagination>;
    getPaginatedCompany(searchPaginationInput: SearchPaginationInput): CompanyPagination | Promise<CompanyPagination>;
    getPaginatedProduct(searchPaginationInput: SearchPaginationInput): ProductPagination | Promise<ProductPagination>;
    getPaginatedProductCategory(searchPaginationInput: SearchPaginationInput): ProductCategoryPagination | Promise<ProductCategoryPagination>;
    getPaginatedProductSubcategory(searchPaginationInput: SearchPaginationInput): ProductSubcategoryPagination | Promise<ProductSubcategoryPagination>;
    getPaginatedUser(searchPaginationInput: SearchPaginationInput): UserPagination | Promise<UserPagination>;
    getPaginatedZone(searchPaginationInput: SearchPaginationInput): ZonePagination | Promise<ZonePagination>;
    getProductById(id: number): Product | Promise<Product>;
    getProductCategoryById(id: number): ProductCategory | Promise<ProductCategory>;
    getProductSubcategoryById(id: number): ProductSubcategory | Promise<ProductSubcategory>;
    getUserById(id: number): User | Promise<User>;
    getZoneById(id: number): Zone | Promise<Zone>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
}

export interface User {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    dob?: Nullable<DateTime>;
    email: string;
    id: number;
    is_dealer: boolean;
    is_manufacturer: boolean;
    name: string;
    otp?: Nullable<string>;
    password: string;
    profile?: Nullable<string>;
    role: Role;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    zone: Zone;
    zone_id: number;
}

export interface UserPagination {
    data: User[];
    skip: number;
    take: number;
    total: number;
}

export interface Zone {
    city: City;
    city_id: number;
    id: number;
    name: string;
    status: Status;
}

export interface ZonePagination {
    data: Zone[];
    skip: number;
    take: number;
    total: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
