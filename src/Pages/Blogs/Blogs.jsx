import React from "react";

const Blogs = () => {
  return (
    <div className="p-3">
      <h3 className="text-3xl font-semi-bold my-5">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h3>
      <p className="text-2xl my-3">
        <span className="font-medium">Access Tokens:</span> Access tokens are
        credentials used to access protected resources. Access tokens are used
        as bearer tokens. A bearer token means that the bearer (who holds the
        access token) can access authorized resources without further
        identification. Because of this, it is important that bearer tokens be
        protected. These tokens usually have a short lifespan for security
        purpose. When it expires, the user must authenticate again to get a new
        access token limiting the exposure of the fact that it is a bearer
        token.
      </p>
      <p className="text-2xl">
        <span className="font-medium">Refresh Token:</span> This token is a
        long-lived token compared to the access token and is used to request a
        new access token in cases where it is expired. It can be considered as
        credentials used to obtain access tokens. It's allowed for long-lived
        access and highly confidential. Refresh tokens can be used for grant
        types – authorization code and password credentials grant.
      </p>
      <p className="text-2xl">
        <span className="font-medium">How they works:</span> A refresh token is
        a special token that is used to obtain additional access tokens. This
        allows you to have short-lived access tokens without having to collect
        credentials every time one expires.
      </p>
      <p className="text-2xl">
        <span className="font-medium">How they works:</span> <br /> 1.Store the
        Access Token as Cookie for the WEBAPP. <br /> 2.Store the Refresh Token
        to Database. <br /> 3.Use Request Interceptor to check Cookie for every
        requests. <br /> 4.If Cookie is expiring - Use Refresh Token to generate
        new Access Token - Replace the Cookie. <br /> 5.If Refresh Token also
        expired - Remove Cookie - Redirect user to Login Page.
      </p>
      <h3 className="text-3xl font-semi-bold my-5">
        2. Compare SQL and NoSQL databases?
      </h3>
      <p className="text-2xl my-3">
        <span className="font-medium">SQL: </span>Structured Query Language is
        known as SQL. It is utilized in relational database management systems
        to store and manage data (RDMS). It's a common language for relational
        databases. A user is able to build, read, edit, and remove relational
        databases and tables with this tool. SQL is the universal database
        language used by every RDBMS, including MySQL, Informix, Oracle, MS
        Access, and SQL Server.
      </p>
      <p className="text-2xl my-3">
        <span className="font-medium">No SQL: </span>Non-SQL or non-relational
        databases are referred to as NoSQL databases. It offers a data storage
        and retrieval method different from the relational databases' tabular
        relations paradigm. NoSQL databases do not use tables to store data.
      </p>
      <h3 className="text-3xl font-semi-bold my-5">
        3. What is express js? What is Nest JS?
      </h3>
      <p className="text-2xl my-3">
        <span className="font-medium">Express JS: </span>Express.js is a small
        framework that works on top of Node.js web server functionality to
        simplify its APIs and add helpful new features. It makes it easier to
        organize your application’s functionality with middleware and routing.
        It adds helpful utilities to Node.js HTTP objects and facilitates the
        rendering of dynamic HTTP objects.
      </p>
      <p className="text-2xl my-3">
        <span className="font-medium">Nest JS: </span>NestJS is a popular
        open-source, back-end framework for Node.js and TypeScript-based,
        server-side applications. It is intended to provide a solid foundation
        for developing server-side applications by leveraging well-known
        patterns and the best practices from other frameworks such as Angular,
        Express.js, and others. NestJS is a modular and adaptable framework that
        allows developers to easily organize their code into smaller and
        reusable modules. It also includes a robust dependency injection
        framework that simplifies managing application components and
        dependencies. NestJS also supports several server-side rendering
        techniques and interfaces with other Node.js modules and tools.
      </p>
      <h3 className="text-3xl font-semi-bold my-5">
        4. What is MongoDB aggregate and how does it work?
      </h3>
      <p className="text-2xl my-3">
        <span className="font-medium">MongoDB Aggregate: </span>What is
        Aggregation in MongoDB? Aggregation is a way of processing a large
        number of documents in a collection by means of passing them through
        different stages. The stages make up what is known as a pipeline. The
        stages in a pipeline can filter, sort, group, reshape and modify
        documents that pass through the pipeline.
      </p>
      <p className="text-2xl">
        <span className="font-medium">How they works:</span> <br /> There is no
        better method than MongoDB Aggregations when we need to collect the
        metrics from MongoDB for any graphical illustration or maybe other
        operations. Aggregation in MongoDB is responsible for processing the
        data, which results in the calculated outputs, generally by assembling
        the data from several documents and then executes in various ways on
        those assembled data in order to yield one collective result. It
        practices documents and then yield computed outputs and thus execute a
        range of operations on the assembled data to return only one result.
        Aggregation in MongoDB was progressed when limitations were viewed
        because of having millions of embedded documents, taking much time in
        processing, and server’s random memory which may terminate the
        operations.
      </p>
    </div>
  );
};

export default Blogs;
