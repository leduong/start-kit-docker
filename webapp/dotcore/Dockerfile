FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
# COPY *.csproj ./
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

# # Copy everything else and build
# COPY ../engine/examples ./
# RUN dotnet publish -c Release -o out

# # Build runtime image
# FROM mcr.microsoft.com/dotnet/aspnet:3.1
# WORKDIR /app
# COPY --from=build-env /app/out .
# ENTRYPOINT ["dotnet", "aspnetapp.dll"]
CMD /bin/bash ./entrypoint.sh