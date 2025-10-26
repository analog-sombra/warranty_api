
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
    is_dealer: boolean;
    logo: string;
    name: string;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    website?: Nullable<string>;
    zone_id: number;
}

export interface CreateDealerSalesInput {
    batch_number: string;
    company_id: number;
    createdById: number;
    dealer_id: number;
    product_id: number;
    quantity: number;
    sale_date?: Nullable<DateTime>;
    warranty_till: number;
}

export interface CreateDealerStockInput {
    batch_number: string;
    company_id: number;
    createdById: number;
    dealer_id: number;
    product_id: number;
    quantity: number;
    status?: Nullable<Status>;
}

export interface CreateProductCategoryInput {
    createdById: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    status?: Nullable<Status>;
}

export interface CreateProductInput {
    company_id: number;
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

export interface CreateSalesInput {
    company_id: number;
    createdById: number;
    customer_id: number;
    dealer_id: number;
    product_id: number;
    warranty_till: number;
}

export interface CreateUserCompanyInput {
    company_id: number;
    createdById: number;
    status?: Nullable<Status>;
    user_id: number;
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
    is_dealer?: Nullable<boolean>;
    logo?: Nullable<string>;
    name?: Nullable<string>;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    website?: Nullable<string>;
    zone_id?: Nullable<number>;
}

export interface UpdateDealerSalesInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    dealer_id?: Nullable<number>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    sale_date?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface UpdateDealerStockInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    dealer_id?: Nullable<number>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
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
    company_id?: Nullable<number>;
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

export interface UpdateSalesInput {
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    customer_id?: Nullable<number>;
    dealer_id?: Nullable<number>;
    product_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface UpdateUserCompanyInput {
    company_id: number;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    user_id: number;
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

export interface WhereCitySearchInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface WhereCompanySearchInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    contact_person?: Nullable<string>;
    contact_person_number?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    designation?: Nullable<string>;
    email?: Nullable<string>;
    gst?: Nullable<string>;
    id?: Nullable<string>;
    is_dealer?: Nullable<boolean>;
    logo?: Nullable<string>;
    name?: Nullable<string>;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    website?: Nullable<string>;
    zone_id?: Nullable<number>;
}

export interface WhereDealerSalesSearchInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    dealer_id?: Nullable<number>;
    id?: Nullable<string>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    sale_date?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface WhereDealerStockSearchInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    dealer_id?: Nullable<number>;
    id?: Nullable<string>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereProductCategorySearchInput {
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereProductSearchInput {
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    status?: Nullable<Status>;
    subcategory_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_time?: Nullable<number>;
}

export interface WhereProductSubcategorySearchInput {
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    product_category_id?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereSalesSearchInput {
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    customer_id?: Nullable<number>;
    dealer_id?: Nullable<number>;
    id?: Nullable<string>;
    product?: Nullable<WhereProductSearchInput>;
    product_id?: Nullable<number>;
    sale_date?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface WhereUserCompanySearchInput {
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    id?: Nullable<string>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    user_id?: Nullable<number>;
}

export interface WhereUserSearchInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
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

export interface WhereZoneSearchInput {
    city_id?: Nullable<number>;
    id?: Nullable<string>;
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
    is_dealer: boolean;
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

export interface DealerSales {
    batch_number: string;
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    dealer: Company;
    dealer_id: number;
    id: number;
    product: Product;
    product_id: number;
    quantity: number;
    sale_date: DateTime;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    warranty_till: number;
}

export interface DealerSalesPagination {
    data: DealerSales[];
    skip: number;
    take: number;
    total: number;
}

export interface DealerStock {
    batch_number: string;
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    dealer: Company;
    dealer_id: number;
    id: number;
    product: Product;
    product_id: number;
    quantity: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface DealerStockPagination {
    data: DealerStock[];
    skip: number;
    take: number;
    total: number;
}

export interface IMutation {
    createCity(inputType: CreateCityInput): City | Promise<City>;
    createCompany(inputType: CreateCompanyInput): Company | Promise<Company>;
    createDealerSales(inputType: CreateDealerSalesInput): DealerSales | Promise<DealerSales>;
    createDealerStock(inputType: CreateDealerStockInput): DealerStock | Promise<DealerStock>;
    createProduct(inputType: CreateProductInput): Product | Promise<Product>;
    createProductCategory(inputType: CreateProductCategoryInput): ProductCategory | Promise<ProductCategory>;
    createProductSubcategory(inputType: CreateProductSubcategoryInput): ProductSubcategory | Promise<ProductSubcategory>;
    createSales(inputType: CreateSalesInput): Sales | Promise<Sales>;
    createUser(inputType: CreateUserInput): User | Promise<User>;
    createUserCompany(inputType: CreateUserCompanyInput): UserCompany | Promise<UserCompany>;
    createZone(inputType: CreateZoneInput): Zone | Promise<Zone>;
    deleteCity(id: number, userid: number): City | Promise<City>;
    deleteCompany(id: number, userid: number): Company | Promise<Company>;
    deleteDealerSales(id: number, userid: number): DealerSales | Promise<DealerSales>;
    deleteDealerStock(id: number, userid: number): DealerStock | Promise<DealerStock>;
    deleteProduct(id: number, userid: number): Product | Promise<Product>;
    deleteProductCategory(id: number, userid: number): ProductCategory | Promise<ProductCategory>;
    deleteProductSubcategory(id: number, userid: number): ProductSubcategory | Promise<ProductSubcategory>;
    deleteSales(id: number, userid: number): Sales | Promise<Sales>;
    deleteUser(id: number, userid: number): User | Promise<User>;
    deleteUserCompany(id: number, userid: number): UserCompany | Promise<UserCompany>;
    deleteZone(id: number, userid: number): Zone | Promise<Zone>;
    optLogin(contact: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateCity(id: number, updateType: UpdateCityInput): City | Promise<City>;
    updateCompany(id: number, updateType: UpdateCompanyInput): Company | Promise<Company>;
    updateDealerSales(id: number, updateType: UpdateDealerSalesInput): DealerSales | Promise<DealerSales>;
    updateDealerStock(id: number, updateType: UpdateDealerStockInput): DealerStock | Promise<DealerStock>;
    updateProduct(id: number, updateType: UpdateProductInput): Product | Promise<Product>;
    updateProductCategory(id: number, updateType: UpdateProductCategoryInput): ProductCategory | Promise<ProductCategory>;
    updateProductSubcategory(id: number, updateType: UpdateProductSubcategoryInput): ProductSubcategory | Promise<ProductSubcategory>;
    updateSales(id: number, updateType: UpdateSalesInput): Sales | Promise<Sales>;
    updateUser(id: number, updateType: UpdateUserInput): User | Promise<User>;
    updateUserCompany(id: number, updateType: UpdateUserCompanyInput): UserCompany | Promise<UserCompany>;
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
    status: Status;
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
    getAllCity(whereSearchInput: WhereCitySearchInput): City[] | Promise<City[]>;
    getAllCompany(whereSearchInput: WhereCompanySearchInput): Company[] | Promise<Company[]>;
    getAllDealerSales(whereSearchInput: WhereDealerSalesSearchInput): DealerSales[] | Promise<DealerSales[]>;
    getAllDealerStock(whereSearchInput: WhereDealerStockSearchInput): DealerStock[] | Promise<DealerStock[]>;
    getAllProduct(whereSearchInput: WhereProductSearchInput): Product[] | Promise<Product[]>;
    getAllProductCategory(whereSearchInput: WhereProductCategorySearchInput): ProductCategory[] | Promise<ProductCategory[]>;
    getAllProductSubcategory(whereSearchInput: WhereProductSubcategorySearchInput): ProductSubcategory[] | Promise<ProductSubcategory[]>;
    getAllSales(whereSearchInput: WhereSalesSearchInput): Sales[] | Promise<Sales[]>;
    getAllUser(whereSearchInput: WhereUserSearchInput): User[] | Promise<User[]>;
    getAllUserCompany(whereSearchInput: WhereUserCompanySearchInput): UserCompany[] | Promise<UserCompany[]>;
    getAllZone(whereSearchInput: WhereZoneSearchInput): Zone[] | Promise<Zone[]>;
    getCityById(id: number): City | Promise<City>;
    getCompanyById(id: number): Company | Promise<Company>;
    getDealerSalesById(id: number): DealerSales | Promise<DealerSales>;
    getDealerStockById(id: number): DealerStock | Promise<DealerStock>;
    getPaginatedCity(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereCitySearchInput): CityPagination | Promise<CityPagination>;
    getPaginatedCompany(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereCompanySearchInput): CompanyPagination | Promise<CompanyPagination>;
    getPaginatedDealerSales(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereDealerSalesSearchInput): DealerSalesPagination | Promise<DealerSalesPagination>;
    getPaginatedDealerStock(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereDealerStockSearchInput): DealerStockPagination | Promise<DealerStockPagination>;
    getPaginatedProduct(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductSearchInput): ProductPagination | Promise<ProductPagination>;
    getPaginatedProductCategory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductCategorySearchInput): ProductCategoryPagination | Promise<ProductCategoryPagination>;
    getPaginatedProductSubcategory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductSubcategorySearchInput): ProductSubcategoryPagination | Promise<ProductSubcategoryPagination>;
    getPaginatedSales(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSalesSearchInput): SalesPagination | Promise<SalesPagination>;
    getPaginatedUser(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserSearchInput): UserPagination | Promise<UserPagination>;
    getPaginatedUserCompany(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserCompanySearchInput): UserCompanyPagination | Promise<UserCompanyPagination>;
    getPaginatedZone(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereZoneSearchInput): ZonePagination | Promise<ZonePagination>;
    getProductById(id: number): Product | Promise<Product>;
    getProductCategoryById(id: number): ProductCategory | Promise<ProductCategory>;
    getProductSubcategoryById(id: number): ProductSubcategory | Promise<ProductSubcategory>;
    getSalesById(id: number): Sales | Promise<Sales>;
    getUserById(id: number): User | Promise<User>;
    getUserCompanyById(id: number): UserCompany | Promise<UserCompany>;
    getZoneById(id: number): Zone | Promise<Zone>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    searchCity(whereSearchInput: WhereCitySearchInput): Nullable<City> | Promise<Nullable<City>>;
    searchCompany(whereSearchInput: WhereCompanySearchInput): Nullable<Company> | Promise<Nullable<Company>>;
    searchDealerSales(whereSearchInput: WhereDealerSalesSearchInput): Nullable<DealerSales> | Promise<Nullable<DealerSales>>;
    searchDealerStock(whereSearchInput: WhereDealerStockSearchInput): Nullable<DealerStock> | Promise<Nullable<DealerStock>>;
    searchProduct(whereSearchInput: WhereProductSearchInput): Nullable<Product> | Promise<Nullable<Product>>;
    searchProductCategory(whereSearchInput: WhereProductCategorySearchInput): Nullable<ProductCategory> | Promise<Nullable<ProductCategory>>;
    searchProductSubcategory(whereSearchInput: WhereProductSubcategorySearchInput): Nullable<ProductSubcategory> | Promise<Nullable<ProductSubcategory>>;
    searchSales(whereSearchInput: WhereSalesSearchInput): Nullable<Sales> | Promise<Nullable<Sales>>;
    searchUser(whereSearchInput: WhereUserSearchInput): Nullable<User> | Promise<Nullable<User>>;
    searchUserCompany(whereSearchInput: WhereUserCompanySearchInput): Nullable<UserCompany> | Promise<Nullable<UserCompany>>;
    searchZone(whereSearchInput: WhereZoneSearchInput): Nullable<Zone> | Promise<Nullable<Zone>>;
}

export interface Sales {
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    customer: User;
    customer_id: number;
    dealer: Company;
    dealer_id: number;
    id: number;
    product: Product;
    product_id: number;
    sale_date: DateTime;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    warranty_till: number;
}

export interface SalesPagination {
    data: Sales[];
    skip: number;
    take: number;
    total: number;
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
    email?: Nullable<string>;
    id: number;
    is_dealer: boolean;
    is_manufacturer: boolean;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role: Role;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    zone: Zone;
    zone_id: number;
}

export interface UserCompany {
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    id: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    user: User;
    user_id: number;
}

export interface UserCompanyPagination {
    data: UserCompany[];
    skip: number;
    take: number;
    total: number;
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
