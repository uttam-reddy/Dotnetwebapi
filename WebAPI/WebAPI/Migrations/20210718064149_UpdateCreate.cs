using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class UpdateCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "address",
                table: "DCandidates");

            migrationBuilder.DropColumn(
                name: "age",
                table: "DCandidates");

            migrationBuilder.RenameColumn(
                name: "mobile",
                table: "DCandidates",
                newName: "UserName");

            migrationBuilder.RenameColumn(
                name: "bloodGroup",
                table: "DCandidates",
                newName: "Gender");

            migrationBuilder.AddColumn<DateTime>(
                name: "dateofBirth",
                table: "DCandidates",
                type: "Date",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dateofBirth",
                table: "DCandidates");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "DCandidates",
                newName: "mobile");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "DCandidates",
                newName: "bloodGroup");

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "DCandidates",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "age",
                table: "DCandidates",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
